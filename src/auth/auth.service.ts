import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    // check is user exist
    const user = await this.userService.findOneByEmail(email);
    if (!user) return null;

    // check is password match
    const match = await this.comparePassword(password, user.password);
    if (!match) return null;

    // get user data
    const { password: pass, ...results } = user['dataValues']; // ensure you remove user password from fetched user data
    return results;
  }

  async login(user) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  async register(user) {
    // generate hash
    const password = await this.hashPassword(user.password);

    // register user in db
    const newUser = await this.userService.create({ ...user, password });

    // remove user password and return results
    const { password: pass, ...results } = newUser['dataValues'];

    // get token
    const token = await this.generateToken(results);
    return { user: results, token };
  }

  private async comparePassword(
    password: string,
    dbPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, dbPassword);
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  private async generateToken(user) {
    return await this.jwtService.signAsync(user);
  }
}

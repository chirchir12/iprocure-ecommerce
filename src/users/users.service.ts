import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from './constants';
import { UserDto } from './dtos/index.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }
  async show() {
    const users = await this.userRepository.findAll();
    return (users || []).map((user) => {
      const { password, ...results } = user['dataValues'];
      return results;
    });
  }
  async update(id: number, user: UserDto) {
    const userExist = await this.findOneById(id);
    if (!userExist) {
      throw new NotFoundException('User does not exist');
    }
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userRepository.update(
        { ...user },
        { where: { id }, returning: true },
      );
    const { password, ...results } = updatedUser['dataValues'];
    return results;
  }
  async delete(id: number) {
    const userExist = await this.findOneById(id);
    if (!userExist) {
      throw new NotFoundException('User does not exist');
    }
    return this.userRepository.destroy({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}

import { Inject, Injectable } from '@nestjs/common';
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
  async show(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
  async update(id: number, user: UserDto) {
    // TODO: HANDLE ERRORS FOR WHEN USER IS NOT FOUND
    return await this.userRepository.update({ ...user }, { where: { id } });
  }
  async delete(id: number) {
    // TODO: HANDLE ERRORS FOR WHEN USER IS NOT FOUND
    return this.userRepository.destroy({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}

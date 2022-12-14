import { IUserEntity } from '../entities/user.entity';
import { UserInputDTO } from './dto/userInput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserInputDTO } from './dto/partialUserInput.dto';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { Exception } from 'src/utils/exceptions/exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  prisma: any;
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: UserInputDTO): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID(), role: 'user' };
    if (user.password.length <= 7) {
      throw new Exception(
        Exceptions.InvalidData,
        'Password must be at least 7 characters',
      );
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    userEntity.password = hashedPassword;

    const createdUser = await this.userRepository.createUser(userEntity);
    return createdUser;
  }

  async updateUser(userData: PartialUserInputDTO): Promise<IUserEntity> {
    const updatedUser = await this.userRepository.updateUser(userData);
    return updatedUser;
  }

  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.userRepository.findAllUsers();
  }
  async deleteUserById(userId: string): Promise<boolean> {
    try {
      await this.userRepository.deleteUser(userId);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getUserById(userId: string): Promise<IUserEntity> {
    const foundUser = await this.userRepository.findUserByEmail(userId);
    return foundUser;
  }

  async findUserByEmail(email: string): Promise<IUserEntity> {
    const user = await this.userRepository.findUserByEmail(email);
    return user;
  }
}

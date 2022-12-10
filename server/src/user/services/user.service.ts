import { IUserEntity } from '../entities/user.entity';
import { UserInputDTO } from './dto/userInput.dto';
import { randomUUID } from 'node:crypto';
import { PartialUserInputDTO } from './dto/partialUserInput.dto';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { Exception } from 'src/utils/exceptions/exception';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async createUser(user: UserInputDTO): Promise<IUserEntity> {
    const userEntity = { ...user, id: randomUUID() };
    if (user.password.length <= 7) {
      throw new Exception(Exceptions.InvalidData,"Password must be at least 7 characters")
    }
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
    const foundUser = await this.userRepository.findUserById(userId);
    return foundUser;
  }
}

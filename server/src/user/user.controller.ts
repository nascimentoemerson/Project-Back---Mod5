import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  BadRequestException,
} from '@nestjs/common';

import { IUserEntity } from './entities/user.entity';
import { PartialUserInputDTO } from './services/dto/partialUserInput.dto';
import { UserInputDTO } from './services/dto/userInput.dto';
import { UserService } from './services/user.service';
import { Response } from 'express';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

@Controller('user')
export class Usercontroller {
  constructor(private service: UserService) {}

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (error) {
      HandleException(error);
    }
  }

  @Post()
  async createUSer(
    @Body() { cpf, email, password, name, role }: UserInputDTO,
    @Res() response: Response,
  ) {
    try {
      const result = await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
      response.status(201).send(result);
    } catch (error) {
      HandleException(error);
    }
  }

  @Patch()
  async updateUser(
    @Body() userData: PartialUserInputDTO,
  ): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    try {
      const userIsDeleted = await this.service.deleteUserById(userId);
      if (userIsDeleted) {
        return 'User deleted';
      } else {
        return 'User not found';
      }
    } catch (error) {
      console.log(error);
    }
  }
}

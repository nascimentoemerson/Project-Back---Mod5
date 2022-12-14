import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';

import { IUserEntity } from './entities/user.entity';
import { PartialUserInputDTO } from './services/dto/partialUserInput.dto';
import { UserInputDTO } from './services/dto/userInput.dto';
import { UserService } from './services/user.service';
import { Response } from 'express';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';

@Controller('user')
@ApiTags('Usuários')
export class Usercontroller {
  constructor(private service: UserService) {}

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
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
    @Body() { cpf, email, password, name }: UserInputDTO,
    @Res() response: Response,
  ) {
    try {
      const result = await this.service.createUser({
        cpf,
        email,
        password,
        name,
      });
      response.status(201).send(result);
    } catch (error) {
      HandleException(error);
    }
  }
  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
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

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
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

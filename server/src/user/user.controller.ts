import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { IUserEntity } from './entities/user.entity';
import { PartialUserInputDTO } from './services/dto/partialUserInput.dto';
import { UserInputDTO } from './services/dto/userInput.dto';
import { UserService } from './services/user.service';

@Controller()
export class Usercontroller {
  constructor(private service: UserService) {}

  @Get()
  async getAllUser(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Post()
  async createUSer(
    @Body() { cpf, email, password, name, role }: UserInputDTO,
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (error) {
      console.log(error);
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
}

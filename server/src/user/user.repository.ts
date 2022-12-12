import { IUserEntity } from './entities/user.entity';
import { PartialUserInputDTO } from './services/dto/partialUserInput.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { Exception } from 'src/utils/exceptions/exception';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: IUserEntity): Promise<IUserEntity> {
    try {
      const CreatedUser = await this.prisma.user.create({ data: user });
      return CreatedUser;
    } catch (error) {
      throw new Exception(
        Exceptions.DatabaseException,
        'Error creating user cpf or email already registered',
      );
    }
  }

  async updateUser(user: PartialUserInputDTO): Promise<IUserEntity> {
    try {
      const UpdateUser = await this.prisma.user.update({
        where: { id: user.id },
        data: user,
      });
      return UpdateUser;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    try {
      const DeleteUser = await this.prisma.user.delete({
        where: { id: id },
      });
      return DeleteUser;
    } catch (error) {
      throw new Exception(
        Exceptions.DatabaseException,
        'User not found in database',
      );
    }
  }

  async findAllUsers(): Promise<IUserEntity[]> {
    try {
      const AllUser = await this.prisma.user.findMany();
      return AllUser;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }

  async findUserById(id: string): Promise<IUserEntity> {
    try {
      const UserById = await this.prisma.user.findUniqueOrThrow({
        where: { id: id },
      });
      return UserById;
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException);
    }
  }
}

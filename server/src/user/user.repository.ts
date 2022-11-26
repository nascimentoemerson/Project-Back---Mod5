import { IUserEntity } from './entities/user.entity';
import { PartialUserInputDTO } from './services/dto/partialUserInput.dto';
import { UserInputDTO } from './services/dto/userInput.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: UserInputDTO): Promise<IUserEntity> {
    const CreateUser = await this.prisma.user.create({ data: user });
    return CreateUser;
  }

  async updateUser(user: PartialUserInputDTO): Promise<IUserEntity> {
    const UpdateUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdateUser;
  }

  async deleteUser(id: string): Promise<IUserEntity> {
    const DeleteUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return DeleteUser;
  }

  async findAllUser(): Promise<IUserEntity> {
    const AllUser = await this.prisma.user.findMany();
    return AllUser;
  }

  async findUserById(id: string): Promise<IUserEntity> {
    const UserById = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return UserById;
  }
}

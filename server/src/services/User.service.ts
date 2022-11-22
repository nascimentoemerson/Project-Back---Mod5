import { IUserEntity } from '../user/entities/user.entity';
import { UserInputDTO } from './dto/userInput.dto';
import { randomUUID } from 'crypto';

export class UserService {
  private users: IUserEntity[] = [];

  async createUser(user: UserInputDTO): Promise<IUserEntity> {
    const newUser = { ...user, id: randomUUID() };
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(userData: PartialUserInputDTO): Promise<IUserEntity> {
        this.users.map((user, index) => {
            if (user.id === userData.id) {
                const UpdatedUser = Object.assign(user, userData);
                this.users.splice()
            }
        })
        const updatedUser = this.users.find((user) => user.id === userData.id);
        return updatedUser;
}

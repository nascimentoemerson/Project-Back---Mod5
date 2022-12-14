import { UserInputDTO } from 'src/user/services/dto/userInput.dto';

export interface IUserEntity extends UserInputDTO {
  id: string;
  role: string;
}

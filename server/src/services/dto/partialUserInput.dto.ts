import { PartialType } from '@nestjs/mapped-types';
import { UserInputDTO } from './userInput.dto';

export class PartialUserInputDTO extends PartialType(UserInputDTO) {
  id: string;
}

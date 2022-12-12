import { ListaChamada } from 'src/lista-chamada/lista-chamada.entity';
import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateSalaDto } from '../dto/create-sala.dto';

export class Sala extends CreateSalaDto {
  id: string;
  estudantes: IUserEntity[];
  professores: IUserEntity[];
  listaChamada: ListaChamada[];
}

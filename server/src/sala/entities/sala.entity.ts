import { CreateSalaDto } from "../dto/create-sala.dto";
import { IUserEntity } from "src/user/entities/user.entity";
import { ListaChamada } from "src/lista-chamada/entities/lista-chamada.entity";


export class Sala extends CreateSalaDto {
    id: string 
    estudantes: IUserEntity[]
    professores: IUserEntity[]
    listachamada: ListaChamada[]
}

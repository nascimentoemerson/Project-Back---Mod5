import { ListaChamada } from "src/lista-chamada/entities/lista-chamada.entity"
import { IUserEntity } from "src/user/entities/user.entity"

export class CreateSalaDto {
    name: string
    tema: string
    assunto: string
    estudantes: IUserEntity[]
    professores: IUserEntity[]
    listachamada: ListaChamada[]
}

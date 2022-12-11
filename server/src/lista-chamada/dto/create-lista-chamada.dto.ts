import { IUserEntity } from "src/user/entities/user.entity"

export class CreateListaChamadaDto {
    salaId: string
    estudantes: IUserEntity
    dataInicial: Date
    dataFinal: Date
    dia: Date
}

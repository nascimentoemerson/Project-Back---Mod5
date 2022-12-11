import { CreateListaChamadaDto } from "../dto/create-lista-chamada.dto";
import { IUserEntity } from "src/user/entities/user.entity"

export class ListaChamada extends CreateListaChamadaDto {
    id: string;
    dataInicial: Date;
    dataFinal: Date;
    estudantes: IUserEntity[] = [];
    dia: string;
}

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SalaService } from 'src/sala/sala.service';
import { CreateListaChamadaDto } from './dto/create-lista-chamada.dto';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';
import { ListaChamada } from './entities/lista-chamada.entity';

@Injectable()
export class ListaChamadaService {
  private _listaChamada: ListaChamada[] = []
  constructor(private readonly salaService: SalaService) { }
  async create(createListaChamadaDto: CreateListaChamadaDto): Promise<ListaChamada> {
    await this.salaService.findOne(createListaChamadaDto.salaId)

    const Dia = new Date(Date.now()).toISOString().slice(0, 10);
    const diaFormatado = Dia.slice(8, 10) + '/' + Dia.slice(5, 7) + '/' + Dia.slice(0, 4);

    const dataFinalChamada = 10 * 60 * 1000

    const listaHoje = new ListaChamada()
     listaHoje.id = randomUUID(),
      listaHoje.dataInicial = new Date(Date.now()),
      listaHoje.dataFinal = new Date(Date.now() + dataFinalChamada),
      listaHoje.estudantes = [],
      listaHoje.dia = diaFormatado

    this._listaChamada.push(listaHoje)
    return Promise.resolve(listaHoje)
  }

  async findAll() {
    return `This action returns all listaChamada`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} listaChamada`;
  }

  async update(id: number, updateListaChamadaDto: UpdateListaChamadaDto) {
    return `This action updates a #${id} listaChamada`;
  }

  async remove(id: number) {
    return `This action removes a #${id} listaChamada`;
  }
}
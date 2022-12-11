import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SalaService } from 'src/sala/sala.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
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

    const dataFinalChamada = 2 * 60 * 1000

    const listaHoje: ListaChamada = {
      ... createListaChamadaDto,
      id : randomUUID(),
      dataInicial : new Date(Date.now()),
      dataFinal : new Date(Date.now() + dataFinalChamada),
      estudantes :[],
      dia: diaFormatado
    }


    this._listaChamada.push(listaHoje)
    return Promise.resolve(listaHoje)
  }

  async findAll() {
    return this._listaChamada;
  }

  async findOne(id: string): Promise<ListaChamada> {
    const listaChamadaEncontrada = this._listaChamada.find((ListaChamada) => ListaChamada.id === id)
    return listaChamadaEncontrada
  }

  async update(id: number, updateListaChamadaDto: UpdateListaChamadaDto) {
    return `This action updates a #${id} listaChamada`;
  }

  async register(ListaChamadaId: string, userId: string): Promise<string> {
    const listaChamadaEncontrada = await this.findOne((ListaChamadaId))
    const DataAtual = new Date(Date.now())
    if (DataAtual.getTime() > listaChamadaEncontrada.dataFinal.getTime()) {
      throw new Exception(Exceptions.InvalidData, "Perdeu a hora")
    }
    return "Chamada Concluida"
  }

  async remove(id: number) {
    return `This action removes a #${id} listaChamada`;
  }
}
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SalaService } from 'src/sala/sala.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateListaChamadaDto } from './dto/create-lista-chamada.dto';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';
import { ListaChamada } from './lista-chamada.entity';
import { ListaChamadaRepository } from './lista-chamada.repository';

@Injectable()
export class ListaChamadaService {
  constructor(
    private readonly salaService: SalaService,
    private readonly listaChamadaRepository: ListaChamadaRepository,
  ) {}
  async create(
    createListaChamadaDto: CreateListaChamadaDto,
  ): Promise<ListaChamada> {
    await this.salaService.findOne(createListaChamadaDto.salaID);

    const Dia = new Date(Date.now()).toISOString().slice(0, 10);
    const diaFormatado =
      Dia.slice(8, 10) + '/' + Dia.slice(5, 7) + '/' + Dia.slice(0, 4);

    const dataFinalChamada = 2 * 60 * 1000;

    const listaHoje: ListaChamada = {
      ...createListaChamadaDto,
      id: randomUUID(),
      dataInicial: new Date(Date.now()),
      dataFinal: new Date(Date.now() + dataFinalChamada),
      estudantes: [],
      dia: diaFormatado,
    };

    return await this.listaChamadaRepository.criarListaChamada(listaHoje);
  }

  async findAll() {
    return await this.listaChamadaRepository.todasListasChamadas();
  }

  async findOne(id: string): Promise<ListaChamada> {
    const listaChamadaEncontrada =
      await this.listaChamadaRepository.listaChamadaPorId(id);
    return listaChamadaEncontrada;
  }

  async update(updateListaChamadaDto: UpdateListaChamadaDto) {
    return await this.listaChamadaRepository.atualizarListaChamada(
      updateListaChamadaDto,
    );
  }

  async register(
    ListaChamadaId: string,
    userId: string,
  ): Promise<ListaChamada> {
    const listaChamadaEncontrada = await this.findOne(ListaChamadaId);
    const salaEncontrada = await this.salaService.findOne(
      listaChamadaEncontrada.salaID,
    );

    const DataAtual = new Date(Date.now());
    if (DataAtual.getTime() > listaChamadaEncontrada.dataFinal.getTime()) {
      throw new Exception(Exceptions.InvalidData, 'Perdeu a hora');
    }

    const EsdudanteEncontrado = new Map<string, any>();
    for (const estudantes of salaEncontrada.estudantes) {
      EsdudanteEncontrado.set(estudantes.id, { ...estudantes });
    }

    if (EsdudanteEncontrado.get(userId) === undefined) {
      throw new Exception(
        Exceptions.InvalidData,
        'This student not found in classroom',
      );
    }
    const dataToReturn =
      await this.listaChamadaRepository.atualizarListaChamada({
        id: ListaChamadaId,
        estudantesIds: [userId],
      });

    delete dataToReturn.estudantes;
    return dataToReturn;
  }
}

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';
import { SalaRepository } from './sala.repository';

@Injectable()
export class SalaService {
  constructor(private readonly salaRepository: SalaRepository) {}

  async create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const id = randomUUID();
    return await this.salaRepository.criarSala(createSalaDto, id);
  }

  async findAll(): Promise<Sala[]> {
    return await this.salaRepository.encontrarTodasSalas();
  }

  async findOne(id: string): Promise<Sala> {
    return await this.salaRepository.encontrarSalaId(id);
  }

  async update(updateSalaDto: UpdateSalaDto): Promise<Sala> {
    if (!updateSalaDto.estudantesIds && updateSalaDto.professoresIds) {
      throw new Exception(
        Exceptions.InvalidData,
        'você não enviou relacões da tabela ',
      );
    }
    return await this.salaRepository.atualizarSala(updateSalaDto);
  }

  async remove(id: string): Promise<string> {
    await this.salaRepository.deletarSala(id);
    return 'sala deletada com sucesso';
  }
}

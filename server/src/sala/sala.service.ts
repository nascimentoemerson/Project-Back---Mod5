import { Injectable } from '@nestjs/common';
import { assignMetadata } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';

@Injectable()
export class SalaService {
  private _salaList: Sala[] = []
  async create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const salaCriada = {
      ...createSalaDto, id: randomUUID(),
      estudantes: [],
      professores: [],
      listachamada: []
    }
    this._salaList.push(salaCriada)
    return salaCriada;
  }

  async findAll(): Promise<Sala[]> {
    return this._salaList;
  }

  async findOne(id: string): Promise<Sala> {
    return this._salaList.find((Sala => Sala.id === id))
  }

  async update(id: string, updateSalaDto: UpdateSalaDto): Promise<Sala> {
    this._salaList.map((Sala, index) => {
      if (Sala.id === id) {
        const salaModificada = Object.assign(Sala, updateSalaDto)
        this._salaList.splice(index, 1, salaModificada)
      }
    })
    
    return await this.findOne(id)
  }

  async remove(id: string): Promise<string> {
    this._salaList.map((Sala, index) => {
      if (Sala.id === id) {
        this._salaList.splice(index, 1)
      }
    })
    return Promise.resolve("Sala deletada com sucesso")
  }
}

import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';

@Injectable()
export class SalaService {
  private _salaList: Sala[] = []
  async create(createSalaDto: CreateSalaDto) { 
    const salaCriada 
    return 'This action adds a new sala';
  }

  async findAll() {
    return `This action returns all sala`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} sala`;
  }

  async update(id: number, updateSalaDto: UpdateSalaDto) {
    return `This action updates a #${id} sala`;
  }

  async remove(id: number) {
    return `This action removes a #${id} sala`;
  }
}

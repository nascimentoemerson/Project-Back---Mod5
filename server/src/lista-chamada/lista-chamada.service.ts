import { Injectable } from '@nestjs/common';
import { CreateListaChamadaDto } from './dto/create-lista-chamada.dto';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';

@Injectable()
export class ListaChamadaService {
  create(createListaChamadaDto: CreateListaChamadaDto) {
    return 'This action adds a new listaChamada';
  }

  findAll() {
    return `This action returns all listaChamada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listaChamada`;
  }

  update(id: number, updateListaChamadaDto: UpdateListaChamadaDto) {
    return `This action updates a #${id} listaChamada`;
  }

  remove(id: number) {
    return `This action removes a #${id} listaChamada`;
  }
}

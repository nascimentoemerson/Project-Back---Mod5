import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { CreateListaChamadaDto } from './dto/create-lista-chamada.dto';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';

@Controller('lista-chamada')
export class ListaChamadaController {
  constructor(private readonly listaChamadaService: ListaChamadaService) {}

  @Post()
  create(@Body() createListaChamadaDto: CreateListaChamadaDto) {
    return this.listaChamadaService.create(createListaChamadaDto);
  }

  @Get()
  findAll() {
    return this.listaChamadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listaChamadaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListaChamadaDto: UpdateListaChamadaDto) {
    return this.listaChamadaService.update(+id, updateListaChamadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listaChamadaService.remove(+id);
  }
}

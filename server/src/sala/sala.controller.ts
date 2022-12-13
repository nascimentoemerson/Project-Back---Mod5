import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';

@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  async create(@Body() createSalaDto: CreateSalaDto) {
    try {
      return await this.salaService.create(createSalaDto);
    } catch (error) {
      HandleException(error);
    }
  }

  @Get()
  async findAll() {
    return await this.salaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.salaService.findOne(id);
  }
  @Patch()
  async update(@Body() updateSalaDto: UpdateSalaDto) {
    return await this.salaService.update(updateSalaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.salaService.remove(id);
  }
}

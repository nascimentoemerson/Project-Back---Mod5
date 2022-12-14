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
import { ApiTags } from '@nestjs/swagger';

@Controller('Sala')
@ApiTags('Sala de Aula')
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
    try {
      return await this.salaService.findAll();
    } catch (error) {
      HandleException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.salaService.findOne(id);
    } catch (error) {
      HandleException(error);
    }
  }
  @Patch()
  async update(@Body() updateSalaDto: UpdateSalaDto) {
    try {
      return await this.salaService.update(updateSalaDto);
    } catch (error) {
      HandleException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.salaService.remove(id);
    } catch (error) {
      HandleException(error);
    }
  }
}

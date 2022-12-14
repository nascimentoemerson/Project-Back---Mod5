import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';

@Controller('Sala')
@ApiTags('Sala de Aula')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Post()
  async create(@Body() createSalaDto: CreateSalaDto) {
    try {
      return await this.salaService.create(createSalaDto);
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get()
  async findAll() {
    try {
      return await this.salaService.findAll();
    } catch (error) {
      HandleException(error);
    }
  }
  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.salaService.findOne(id);
    } catch (error) {
      HandleException(error);
    }
  }
  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Patch()
  async update(@Body() updateSalaDto: UpdateSalaDto) {
    try {
      return await this.salaService.update(updateSalaDto);
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.salaService.remove(id);
    } catch (error) {
      HandleException(error);
    }
  }
}

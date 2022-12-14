import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { CreateListaChamadaDto } from './dto/create-lista-chamada.dto';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';
import { RegistroListaChamadaDto } from './dto/register-lista-chamada.dto';
import { HandleException } from 'src/utils/exceptions/exceptionsHelper';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { IsTeacherAuthorization } from 'src/auth/decorators/is-teacher.decorator';
import { userLogged } from 'src/auth/decorators/user-logged.decorator';
import { IUserEntity } from 'src/user/entities/user.entity';

@Controller('lista-chamada')
@ApiTags('Lista de Chamada')
export class ListaChamadaController {
  constructor(private readonly listaChamadaService: ListaChamadaService) {}

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Post()
  create(@Body() createListaChamadaDto: CreateListaChamadaDto) {
    return this.listaChamadaService.create(createListaChamadaDto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post('registroListaChamada')
  async registroListaChamada(
    @userLogged() userLogged: IUserEntity,
    @Body() { listaChamadaId }: RegistroListaChamadaDto,
  ) {
    try {
      return await this.listaChamadaService.register(
        listaChamadaId,
        userLogged.id,
      );
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get()
  findAll() {
    try {
      return this.listaChamadaService.findAll();
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.listaChamadaService.findOne(id);
    } catch (error) {
      HandleException(error);
    }
  }

  @UseGuards(AuthGuard(), IsTeacherAuthorization)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Body() updateListaChamadaDto: UpdateListaChamadaDto) {
    try {
      return this.listaChamadaService.update(updateListaChamadaDto);
    } catch (error) {
      HandleException(error);
    }
  }
}

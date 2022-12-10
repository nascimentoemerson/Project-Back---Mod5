import { PartialType } from '@nestjs/swagger';
import { CreateListaChamadaDto } from './create-lista-chamada.dto';

export class UpdateListaChamadaDto extends PartialType(CreateListaChamadaDto) {}

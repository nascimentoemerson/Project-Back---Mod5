import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateListaChamadaDto {
  @ApiProperty()
  @IsString()
  salaId: string;
}

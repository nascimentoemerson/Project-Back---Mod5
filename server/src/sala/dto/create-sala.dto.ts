import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  tema: string;
  @ApiProperty()
  @IsString()
  assunto: string;
  @ApiProperty()
  professoresIds?: string[];
  @ApiProperty()
  estudantesIds?: string[];
}

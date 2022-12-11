import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegistroListaChamadaDto {
    @ApiProperty()
    @IsString()
    listaChamadaId: string
    userId: string
}
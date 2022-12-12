import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSalaDto {
    @ApiProperty()
    @IsString()
    name: String
    @ApiProperty()
    @IsString()
    tema: String
    @ApiProperty()
    @IsString()
    assunto: String
}

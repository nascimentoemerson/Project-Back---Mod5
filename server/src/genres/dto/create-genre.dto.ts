import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Movie } from "src/movies/entities/movie.entity"

export class CreateGenreDto {
    @ApiProperty()
    @IsString()
    name: string
    movies: Movie[]
}

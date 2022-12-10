import { Genre } from "src/genres/entities/genre.entity"

export class CreateMovieDto {
    title: string
    genre: Genre[]
    year: string
    note: string
    trailerurl: string
}

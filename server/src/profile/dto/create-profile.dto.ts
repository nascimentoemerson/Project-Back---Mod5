import { Movie } from "src/movies/entities/movie.entity"

export class CreateProfileDto {
    title: string
    imageurl: string
    movies: Movie[]
}

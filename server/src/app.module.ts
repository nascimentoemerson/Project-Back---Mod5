import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { Usercontroller } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { MoviesModule } from './movies/movies.module';
import { ProfileModule } from './profile/profile.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [DatabaseModule, MoviesModule, ProfileModule, GenresModule],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
})
export class AppModule { }

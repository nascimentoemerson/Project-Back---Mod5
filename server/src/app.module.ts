import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { Usercontroller } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { SalaModule } from './sala/sala.module';


@Module({
  imports: [DatabaseModule, SalaModule],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
})
export class AppModule { }

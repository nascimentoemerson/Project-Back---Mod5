import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { Usercontroller } from './user/user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [Usercontroller],
  providers: [UserService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserService } from './user/services/user.service';
import { Usercontroller } from './user/user.controller';

@Module({
  controllers: [Usercontroller],
  providers: [UserService],
})
export class AppModule {}

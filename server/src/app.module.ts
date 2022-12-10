import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './user/services/user.service';
import { Usercontroller } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, ProfileModule],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
})
export class AppModule {}

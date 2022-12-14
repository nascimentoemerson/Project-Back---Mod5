import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/prisma/database.module';
import { UserService } from './services/user.service';
import { Usercontroller } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}

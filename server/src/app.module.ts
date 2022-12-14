import { Module } from '@nestjs/common';
import { ListaChamadaModule } from './lista-chamada/lista-chamada.module';
import { SalaModule } from './sala/sala.module';
import { DatabaseModule } from './prisma/database.module';
import { Usercontroller } from './user/user.controller';
import { UserRepository } from './user/user.repository';
import { UserService } from './user/services/user.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UserModule,
    SalaModule,
    ListaChamadaModule,
  ],
  controllers: [Usercontroller],
  providers: [UserService, UserRepository],
})
export class AppModule {}

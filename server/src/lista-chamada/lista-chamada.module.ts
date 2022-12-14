import { Module } from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { ListaChamadaController } from './lista-chamada.controller';
import { SalaService } from 'src/sala/sala.service';
import { ListaChamadaRepository } from './lista-chamada.repository';
import { DatabaseModule } from 'src/prisma/database.module';
import { SalaRepository } from 'src/sala/sala.repository';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/services/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ListaChamadaController],
  providers: [
    ListaChamadaService,
    SalaService,
    ListaChamadaRepository,
    SalaRepository,
    UserService,
    UserRepository,
  ],
})
export class ListaChamadaModule {}

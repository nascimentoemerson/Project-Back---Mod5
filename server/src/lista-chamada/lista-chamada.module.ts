import { Module } from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { ListaChamadaController } from './lista-chamada.controller';
import { SalaService } from 'src/sala/sala.service';
import { ListaChamadaRepository } from './lista-chamada.repository';
import { DatabaseModule } from 'src/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ListaChamadaController],
  providers: [ListaChamadaService, SalaService, ListaChamadaRepository],
})
export class ListaChamadaModule {}

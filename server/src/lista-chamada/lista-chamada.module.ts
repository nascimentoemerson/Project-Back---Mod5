import { Module } from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { ListaChamadaController } from './lista-chamada.controller';
import { SalaService } from 'src/sala/sala.service';

@Module({
  controllers: [ListaChamadaController],
  providers: [ListaChamadaService, SalaService]
})
export class ListaChamadaModule {}

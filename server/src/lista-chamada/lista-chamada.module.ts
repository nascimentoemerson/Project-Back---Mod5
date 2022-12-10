import { Module } from '@nestjs/common';
import { ListaChamadaService } from './lista-chamada.service';
import { ListaChamadaController } from './lista-chamada.controller';

@Module({
  controllers: [ListaChamadaController],
  providers: [ListaChamadaService]
})
export class ListaChamadaModule {}

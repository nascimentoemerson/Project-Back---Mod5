import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { SalaRepository } from './sala.repository';
import { DatabaseModule } from 'src/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SalaController],
  providers: [SalaService, SalaRepository],
})
export class SalaModule {}

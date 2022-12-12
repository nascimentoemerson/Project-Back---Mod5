import { PrismaService } from 'src/prisma/prisma.service';

export class ListaChamadaRepository {
  constructor(private readonly prismaService: PrismaService) {}
}

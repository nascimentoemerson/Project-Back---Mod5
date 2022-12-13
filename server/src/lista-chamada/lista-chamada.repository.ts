import { PrismaService } from 'src/prisma/prisma.service';
import { ListaChamada } from './lista-chamada.entity';

export class ListaChamadaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async criarListaChamada({
    salaID,
    dia,
    dataFinal,
    id,
    dataInicial,
    estudantes,
  }: ListaChamada): Promise<ListaChamada> {
    return await this.prismaService.listaChamada.create({
      data: {
        dia: dia,
        dataFinal: dataFinal,
        id: id,
        dataInicial: dataInicial,
        salaID: salaID,
      },
      include: {
        estudantes: true,
      },
    });
  }
}

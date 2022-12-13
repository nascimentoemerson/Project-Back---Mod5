import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { UpdateListaChamadaDto } from './dto/update-lista-chamada.dto';
import { ListaChamada } from './lista-chamada.entity';

@Injectable()
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

  async atualizarListaChamada({
    id,
    estudantesIds,
  }: UpdateListaChamadaDto): Promise<ListaChamada> {
    try {
      return await this.prismaService.listaChamada.update({
        where: { id: id },
        data: {
          estudantes: {
            connect: estudantesIds.map((id) => {
              return { id: id };
            }),
          },
        },
        include: {
          estudantes: true,
        },
      });
    } catch (error) {
      throw new Exception(
        Exceptions.DatabaseException,
        'o usuário enviado não existe',
      );
    }
  }

  async todasListasChamadas(): Promise<ListaChamada[]> {
    return await this.prismaService.listaChamada.findMany({
      include: { estudantes: true },
    });
  }

  async listaChamadaPorId(id: string): Promise<ListaChamada> {
    return await this.prismaService.listaChamada.findUniqueOrThrow({
      where: { id: id },
      include: {
        estudantes: true,
      },
    });
  }
}

import { PrismaService } from 'src/prisma/prisma.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptionsHelper';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';

export class SalaRepository {
  private dataToReturn = {
    listaChamada: {
      include: {
        estudantes: true,
      },
    },
    estudantes: true,
    professores: true,
  };
  constructor(private readonly prismaService: PrismaService) {}

  async criarSala(
    { name, assunto, tema }: CreateSalaDto,
    id: string,
  ): Promise<Sala> {
    try {
      return await this.prismaService.sala.create({
        data: {
          id: id,
          name: name,
          tema: tema,
          assunto: assunto,
        },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }
  async atualizarSala(updateData: UpdateSalaDto): Promise<Sala> {
    try {
      return await this.prismaService.sala.update({
        where: { id: updateData.id },
        data: {
          ...updateData,

          estudantes: {
            connect: updateData.estudantesIds?.map((id) => ({ id: id })),
          },
          professores: {
            connect: updateData.professoresIds?.map((id) => ({ id: id })),
          },
        },
        include: this.dataToReturn,
      });
    } catch (error) {
      throw new Exception(Exceptions.DatabaseException, error.message);
    }
  }

  async deletarSala(id: string): Promise<Sala> {
    try {
      return await this.prismaService.sala.delete({
        where: { id: id },
        include: this.dataToReturn,
      });
    } catch (err) {
      console.log('rodou', err);
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async encontrarSalaId(id: string): Promise<Sala> {
    try {
      return await this.prismaService.sala.findUnique({
        where: { id: id },
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }

  async encontrarTodasSalas(): Promise<Sala[]> {
    try {
      return await this.prismaService.sala.findMany({
        include: this.dataToReturn,
      });
    } catch (err) {
      throw new Exception(Exceptions.DatabaseException, err.message);
    }
  }
}

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSalaDto } from './create-sala.dto';

export class UpdateSalaDto extends PartialType(CreateSalaDto) {
  @ApiProperty()
  id: string;
}

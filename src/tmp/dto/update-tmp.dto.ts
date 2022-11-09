import { PartialType } from '@nestjs/swagger';
import { CreateTmpDto } from './create-tmp.dto';

export class UpdateTmpDto extends PartialType(CreateTmpDto) {}

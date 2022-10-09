import { PartialType } from '@nestjs/mapped-types';
import { CreateClientControllerDto } from './create-client-controller.dto';

export class UpdateClientControllerDto extends PartialType(CreateClientControllerDto) {}

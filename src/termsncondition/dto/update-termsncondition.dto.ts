import { PartialType } from '@nestjs/mapped-types';
import { CreateTermsnconditionDto } from './create-termsncondition.dto';

export class UpdateTermsnconditionDto extends PartialType(CreateTermsnconditionDto) {}

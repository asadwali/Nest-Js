import { Injectable } from '@nestjs/common';
import { CreateTermsnconditionDto } from './dto/create-termsncondition.dto';
import { UpdateTermsnconditionDto } from './dto/update-termsncondition.dto';

@Injectable()
export class TermsnconditionService {
  create(createTermsnconditionDto: CreateTermsnconditionDto) {
    return 'This action adds a new termsncondition';
  }

  findAll() {
    return `This action returns all termsncondition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} termsncondition`;
  }

  update(id: number, updateTermsnconditionDto: UpdateTermsnconditionDto) {
    return `This action updates a #${id} termsncondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} termsncondition`;
  }
}

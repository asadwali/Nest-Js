import { Module } from '@nestjs/common';
import { TermsnconditionService } from './termsncondition.service';
import { TermsnconditionController } from './termsncondition.controller';

@Module({
  controllers: [TermsnconditionController],
  providers: [TermsnconditionService]
})
export class TermsnconditionModule {}

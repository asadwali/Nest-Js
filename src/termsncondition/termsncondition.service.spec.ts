import { Test, TestingModule } from '@nestjs/testing';
import { TermsnconditionService } from './termsncondition.service';

describe('TermsnconditionService', () => {
  let service: TermsnconditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermsnconditionService],
    }).compile();

    service = module.get<TermsnconditionService>(TermsnconditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

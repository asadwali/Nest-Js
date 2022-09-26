import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TermsnconditionService } from './termsncondition.service';
import { CreateTermsnconditionDto } from './dto/create-termsncondition.dto';
import { UpdateTermsnconditionDto } from './dto/update-termsncondition.dto';

@Controller('termsncondition')
export class TermsnconditionController {
  constructor(private readonly termsnconditionService: TermsnconditionService) {}

  @Post()
  create(@Body() createTermsnconditionDto: CreateTermsnconditionDto) {
    return this.termsnconditionService.create(createTermsnconditionDto);
  }

  @Get()
  findAll() {
    return this.termsnconditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termsnconditionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTermsnconditionDto: UpdateTermsnconditionDto) {
    return this.termsnconditionService.update(+id, updateTermsnconditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.termsnconditionService.remove(+id);
  }
}

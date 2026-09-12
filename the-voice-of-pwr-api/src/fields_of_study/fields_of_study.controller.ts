import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FieldsOfStudyService } from './fields_of_study.service';
import { CreateFieldsOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldsOfStudyDto } from './dto/update-fields_of_study.dto';

@Controller('fields-of-study')
export class FieldsOfStudyController {
  constructor(private readonly fieldsOfStudyService: FieldsOfStudyService) {}

  @Post()
  create(@Body() createFieldsOfStudyDto: CreateFieldsOfStudyDto) {
    return this.fieldsOfStudyService.create(createFieldsOfStudyDto);
  }

  @Get()
  findAll() {
    return this.fieldsOfStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsOfStudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldsOfStudyDto: UpdateFieldsOfStudyDto) {
    return this.fieldsOfStudyService.update(+id, updateFieldsOfStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsOfStudyService.remove(+id);
  }
}

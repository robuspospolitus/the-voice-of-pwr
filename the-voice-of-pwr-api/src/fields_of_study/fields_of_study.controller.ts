import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FieldsOfStudyService } from './fields_of_study.service';
import { CreateFieldOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldOfStudyDto } from './dto/update-fields_of_study.dto';

@Controller('fields-of-study')
export class FieldsOfStudyController {
  constructor(private readonly fieldsOfStudyService: FieldsOfStudyService) {}

  @Post()
  create(@Body() createFieldsOfStudyDto: CreateFieldOfStudyDto) {
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
  update(
    @Param('id') id: string,
    @Body() updateFieldsOfStudyDto: UpdateFieldOfStudyDto,
  ) {
    return this.fieldsOfStudyService.update(+id, updateFieldsOfStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsOfStudyService.remove(+id);
  }
}

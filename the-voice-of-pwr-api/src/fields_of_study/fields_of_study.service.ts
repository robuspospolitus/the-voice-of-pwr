import { Injectable } from '@nestjs/common';
import { CreateFieldsOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldsOfStudyDto } from './dto/update-fields_of_study.dto';

@Injectable()
export class FieldsOfStudyService {
  create(createFieldsOfStudyDto: CreateFieldsOfStudyDto) {
    return 'This action adds a new fieldsOfStudy';
  }

  findAll() {
    return `This action returns all fieldsOfStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldsOfStudy`;
  }

  update(id: number, updateFieldsOfStudyDto: UpdateFieldsOfStudyDto) {
    return `This action updates a #${id} fieldsOfStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldsOfStudy`;
  }
}

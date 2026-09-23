import { Injectable } from '@nestjs/common';
import { CreateFieldOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldOfStudyDto } from './dto/update-fields_of_study.dto';

@Injectable()
export class FieldsOfStudyService {
  create(createFieldsOfStudyDto: CreateFieldOfStudyDto) {
    return 'This action adds a new fieldsOfStudy';
  }

  findAll() {
    return `This action returns all fieldsOfStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldsOfStudy`;
  }

  update(id: number, updateFieldsOfStudyDto: UpdateFieldOfStudyDto) {
    return `This action updates a #${id} fieldsOfStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldsOfStudy`;
  }
}

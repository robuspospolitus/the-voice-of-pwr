import { Injectable } from '@nestjs/common';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';

@Injectable()
export class LecturerClassesService {
  create(createLecturerClassDto: CreateLecturerClassDto) {
    return 'This action adds a new lecturerClass';
  }

  findAll() {
    return `This action returns all lecturerClasses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturerClass`;
  }

  update(id: number, updateLecturerClassDto: UpdateLecturerClassDto) {
    return `This action updates a #${id} lecturerClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturerClass`;
  }
}

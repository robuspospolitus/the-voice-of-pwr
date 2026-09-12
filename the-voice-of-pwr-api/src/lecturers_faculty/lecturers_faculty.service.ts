import { Injectable } from '@nestjs/common';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';

@Injectable()
export class LecturersFacultyService {
  create(createLecturersFacultyDto: CreateLecturersFacultyDto) {
    return 'This action adds a new lecturersFaculty';
  }

  findAll() {
    return `This action returns all lecturersFaculty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturersFaculty`;
  }

  update(id: number, updateLecturersFacultyDto: UpdateLecturersFacultyDto) {
    return `This action updates a #${id} lecturersFaculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturersFaculty`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateCourseDto) {
    return this.db.course.create({ data: dto });
  }

  findAll() {
    return this.db.course.findMany();
  }

  async findOne(id: number) {
    const course = await this.db.course.findUnique({ where: { id } });
    if (!course) throw new NotFoundException('Przedmiot nie istnieje');
    return course;
  }

  async update(id: number, dto: UpdateCourseDto) {
    await this.findOne(id);
    return this.db.course.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.course.delete({ where: { id } });
  }
}
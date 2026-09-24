import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';

@Injectable()
export class CourseOpinionsService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateCourseOpinionDto, userId: number) {
    return this.db.courseOpinion.create({ data: { ...dto, userId } });
  }

  findAll() {
    return this.db.courseOpinion.findMany();
  }

  async findOne(id: number) {
    const opinion = await this.db.courseOpinion.findUnique({ where: { id } });
    if (!opinion) throw new NotFoundException('Opinia nie istnieje');
    return opinion;
  }

  async update(id: number, dto: UpdateCourseOpinionDto) {
    await this.findOne(id);
    return this.db.courseOpinion.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.courseOpinion.delete({ where: { id } });
  }
}
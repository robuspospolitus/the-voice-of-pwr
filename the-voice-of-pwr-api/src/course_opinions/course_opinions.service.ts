import { Injectable } from '@nestjs/common';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';

@Injectable()
export class CourseOpinionsService {
  create(createCourseOpinionDto: CreateCourseOpinionDto) {
    return 'This action adds a new courseOpinion';
  }

  findAll() {
    return `This action returns all courseOpinions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOpinion`;
  }

  update(id: number, updateCourseOpinionDto: UpdateCourseOpinionDto) {
    return `This action updates a #${id} courseOpinion`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOpinion`;
  }
}

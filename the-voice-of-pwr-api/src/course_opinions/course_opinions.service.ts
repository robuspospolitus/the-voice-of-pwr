import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';
import { DatabaseService } from 'src/database/database.service';
import { CourseOpinion } from 'generated/prisma/client';

@Injectable()
export class CourseOpinionsService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createCourseOpinionDto: CreateCourseOpinionDto,
  ): Promise<CourseOpinion> {
    const [course, user] = await Promise.all([
      this.databaseService.course.findUnique({
        where: { id: createCourseOpinionDto.courseId },
      }),
      this.databaseService.user.findUnique({
        where: { id: createCourseOpinionDto.userId },
      }),
    ]);

    if (!course) {
      throw new NotFoundException(
        `Course with ID ${createCourseOpinionDto.courseId} not found`,
      );
    }

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createCourseOpinionDto.userId} not found`,
      );
    }

    return this.databaseService.courseOpinion.create({
      data: {
        userId: createCourseOpinionDto.userId,
        courseId: createCourseOpinionDto.courseId,
        stars: createCourseOpinionDto.stars,
        description: createCourseOpinionDto.description,
      },
    });
  }

  async findAll(): Promise<CourseOpinion[]> {
    return this.databaseService.courseOpinion.findMany();
  }

  async findOne(id: number): Promise<CourseOpinion> {
    const opinion = await this.databaseService.courseOpinion.findUnique({
      where: { id },
    });
    if (!opinion) {
      throw new NotFoundException(`Opinion with id ${id} not found`);
    }
    return opinion;
  }

  async update(
    id: number,
    updateCourseOpinionDto: UpdateCourseOpinionDto,
  ): Promise<CourseOpinion> {
    await this.findOne(id);
    return this.databaseService.courseOpinion.update({
      where: { id },
      data: {
        userId: updateCourseOpinionDto.userId,
        courseId: updateCourseOpinionDto.courseId,
        stars: updateCourseOpinionDto.stars,
        description: updateCourseOpinionDto.description,
      },
    });
  }

  async remove(id: number): Promise<CourseOpinion> {
    await this.findOne(id);
    return this.databaseService.courseOpinion.delete({
      where: { id },
    });
  }
}

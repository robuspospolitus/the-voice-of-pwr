import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DatabaseService } from 'src/database/database.service';
import { Course } from 'generated/prisma/client';

@Injectable()
export class CoursesService {
  constructor(private databaseService: DatabaseService) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const fieldOfStudy = await this.databaseService.fieldOfStudy.findUnique({
      where: { shortcut: createCourseDto.fieldOfStudyShortcut },
    });

    if (!fieldOfStudy) {
      throw new NotFoundException(
        `Field of study with shortcut ${createCourseDto.fieldOfStudyShortcut} not found`,
      );
    }

    if (createCourseDto.coordinatorId) {
      const coordinator = await this.databaseService.lecturer.findUnique({
        where: { id: createCourseDto.coordinatorId },
      });
      if (!coordinator) {
        throw new NotFoundException(
          `Coordinator (Lecturer) with ID ${createCourseDto.coordinatorId} not found`,
        );
      }
    }

    return this.databaseService.course.create({
      data: {
        fullName: createCourseDto.fullName,
        fieldOfStudyShortcut: createCourseDto.fieldOfStudyShortcut,
        coordinatorId: createCourseDto.coordinatorId,
        semester: createCourseDto.semester,
      },
    });
  }

  async findAll(): Promise<Course[]> {
    return this.databaseService.course.findMany();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.databaseService.course.findUnique({
      where: { id },
    });
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    await this.findOne(id);
    return this.databaseService.course.update({
      where: { id },
      data: {
        fullName: updateCourseDto.fullName,
        fieldOfStudyShortcut: updateCourseDto.fieldOfStudyShortcut,
        coordinatorId: updateCourseDto.coordinatorId,
        semester: updateCourseDto.semester,
      },
    });
  }

  async remove(id: number): Promise<Course> {
    await this.findOne(id);
    return this.databaseService.course.delete({
      where: { id },
    });
  }
}

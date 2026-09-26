import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';
import { DatabaseService } from 'src/database/database.service';
import { LecturerClass } from 'generated/prisma/client';

@Injectable()
export class LecturerClassesService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createLecturerClassDto: CreateLecturerClassDto,
  ): Promise<LecturerClass> {
    const [lecturer, course] = await Promise.all([
      this.databaseService.lecturer.findUnique({
        where: { id: createLecturerClassDto.lecturerId },
      }),
      this.databaseService.course.findUnique({
        where: { id: createLecturerClassDto.courseId },
      }),
    ]);

    if (!lecturer) {
      throw new NotFoundException(
        `Lecturer with ID ${createLecturerClassDto.lecturerId} not found`,
      );
    }
    if (!course) {
      throw new NotFoundException(
        `Course with ID ${createLecturerClassDto.courseId} not found`,
      );
    }

    return this.databaseService.lecturerClass.create({
      data: {
        lecturerId: createLecturerClassDto.lecturerId,
        courseId: createLecturerClassDto.courseId,
      },
    });
  }

  async findAll(): Promise<LecturerClass[]> {
    return this.databaseService.lecturerClass.findMany();
  }

  async findOne(id: number): Promise<LecturerClass> {
    const lecturerClass = await this.databaseService.lecturerClass.findUnique({
      where: { id },
    });
    if (!lecturerClass) {
      throw new NotFoundException(`LecturerClass with id ${id} not found`);
    }
    return lecturerClass;
  }

  async update(
    id: number,
    updateLecturerClassDto: UpdateLecturerClassDto,
  ): Promise<LecturerClass> {
    await this.findOne(id);
    return this.databaseService.lecturerClass.update({
      where: { id },
      data: {
        lecturerId: updateLecturerClassDto.lecturerId,
        courseId: updateLecturerClassDto.courseId,
      },
    });
  }

  async remove(id: number): Promise<LecturerClass> {
    await this.findOne(id);
    return this.databaseService.lecturerClass.delete({
      where: { id },
    });
  }
}

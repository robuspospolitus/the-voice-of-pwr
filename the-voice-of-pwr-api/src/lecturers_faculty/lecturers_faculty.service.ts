import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';
import { DatabaseService } from 'src/database/database.service';
import { LecturerFaculty } from 'generated/prisma/client';

@Injectable()
export class LecturersFacultyService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createLecturerFacultyDto: CreateLecturersFacultyDto,
  ): Promise<LecturerFaculty> {
    const [lecturer, faculty] = await Promise.all([
      this.databaseService.lecturer.findUnique({
        where: { id: createLecturerFacultyDto.lecturerId },
      }),
      this.databaseService.faculty.findUnique({
        where: { shortcut: createLecturerFacultyDto.facultyShortcut },
      }),
    ]);

    if (!lecturer) {
      throw new NotFoundException(
        `Lecturer with ID ${createLecturerFacultyDto.lecturerId} not found`,
      );
    }
    if (!faculty) {
      throw new NotFoundException(
        `Faculty with shortcut ${createLecturerFacultyDto.facultyShortcut} not found`,
      );
    }

    return this.databaseService.lecturerFaculty.create({
      data: {
        lecturerId: createLecturerFacultyDto.lecturerId,
        facultyShortcut: createLecturerFacultyDto.facultyShortcut,
      },
    });
  }

  async findAll(): Promise<LecturerFaculty[]> {
    return this.databaseService.lecturerFaculty.findMany();
  }

  async findOne(id: number): Promise<LecturerFaculty> {
    const lecturerFaculty =
      await this.databaseService.lecturerFaculty.findUnique({
        where: { id },
      });
    if (!lecturerFaculty) {
      throw new NotFoundException(`LecturerFaculty with id ${id} not found`);
    }
    return lecturerFaculty;
  }

  async update(
    id: number,
    updateLecturerFacultyDto: UpdateLecturersFacultyDto,
  ): Promise<LecturerFaculty> {
    await this.findOne(id);
    return this.databaseService.lecturerFaculty.update({
      where: { id },
      data: {
        lecturerId: updateLecturerFacultyDto.lecturerId,
        facultyShortcut: updateLecturerFacultyDto.facultyShortcut,
      },
    });
  }

  async remove(id: number): Promise<LecturerFaculty> {
    await this.findOne(id);
    return this.databaseService.lecturerFaculty.delete({
      where: { id },
    });
  }
}

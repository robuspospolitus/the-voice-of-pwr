import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { DatabaseService } from 'src/database/database.service';
import { Faculty } from 'generated/prisma/client';

@Injectable()
export class FacultiesService {
  constructor(private databaseService: DatabaseService) {}

  async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    return this.databaseService.faculty.create({
      data: {
        shortcut: createFacultyDto.shortcut,
        fullName: createFacultyDto.fullName,
      },
    });
  }

  async findAll(): Promise<Faculty[]> {
    return this.databaseService.faculty.findMany();
  }

  async findOne(shortcut: string): Promise<Faculty> {
    const faculty = await this.databaseService.faculty.findUnique({
      where: { shortcut },
    });
    if (!faculty) {
      throw new NotFoundException(
        `Faculty with shortcut ${shortcut} not found`,
      );
    }
    return faculty;
  }

  async update(
    shortcut: string,
    updateFacultyDto: UpdateFacultyDto,
  ): Promise<Faculty> {
    await this.findOne(shortcut);
    return this.databaseService.faculty.update({
      where: { shortcut },
      data: {
        shortcut: updateFacultyDto.shortcut,
        fullName: updateFacultyDto.fullName,
      },
    });
  }

  async remove(shortcut: string): Promise<Faculty> {
    await this.findOne(shortcut);
    return this.databaseService.faculty.delete({
      where: { shortcut },
    });
  }
}

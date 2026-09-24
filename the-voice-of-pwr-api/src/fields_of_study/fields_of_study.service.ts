import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFieldOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldOfStudyDto } from './dto/update-fields_of_study.dto';
import { DatabaseService } from 'src/database/database.service';
import { FieldOfStudy } from 'generated/prisma/client';

@Injectable()
export class FieldsOfStudyService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createFieldOfStudyDto: CreateFieldOfStudyDto,
  ): Promise<FieldOfStudy> {
    const faculty = await this.databaseService.faculty.findUnique({
      where: { shortcut: createFieldOfStudyDto.facultyShortcut },
    });

    if (!faculty) {
      throw new NotFoundException(
        `Faculty with shortcut ${createFieldOfStudyDto.facultyShortcut} not found`,
      );
    }

    return this.databaseService.fieldOfStudy.create({
      data: {
        shortcut: createFieldOfStudyDto.shortcut,
        fullName: createFieldOfStudyDto.fullName,
        facultyShortcut: createFieldOfStudyDto.facultyShortcut,
      },
    });
  }

  async findAll(): Promise<FieldOfStudy[]> {
    return this.databaseService.fieldOfStudy.findMany();
  }

  async findOne(shortcut: string): Promise<FieldOfStudy> {
    const fieldOfStudy = await this.databaseService.fieldOfStudy.findUnique({
      where: { shortcut },
    });
    if (!fieldOfStudy) {
      throw new NotFoundException(
        `Field of study with shortcut ${shortcut} not found`,
      );
    }
    return fieldOfStudy;
  }

  async update(
    shortcut: string,
    updateFieldOfStudyDto: UpdateFieldOfStudyDto,
  ): Promise<FieldOfStudy> {
    await this.findOne(shortcut);

    if (updateFieldOfStudyDto.facultyShortcut) {
      const faculty = await this.databaseService.faculty.findUnique({
        where: { shortcut: updateFieldOfStudyDto.facultyShortcut },
      });
      if (!faculty) {
        throw new NotFoundException(
          `Faculty with shortcut ${updateFieldOfStudyDto.facultyShortcut} not found`,
        );
      }
    }

    return this.databaseService.fieldOfStudy.update({
      where: { shortcut },
      data: {
        shortcut: updateFieldOfStudyDto.shortcut,
        fullName: updateFieldOfStudyDto.fullName,
        facultyShortcut: updateFieldOfStudyDto.facultyShortcut,
      },
    });
  }

  async remove(shortcut: string): Promise<FieldOfStudy> {
    await this.findOne(shortcut);
    return this.databaseService.fieldOfStudy.delete({
      where: { shortcut },
    });
  }
}

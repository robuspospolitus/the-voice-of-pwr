import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { DatabaseService } from 'src/database/database.service';
import { Lecturer } from 'generated/prisma/client';

@Injectable()
export class LecturersService {
  constructor(private databaseService: DatabaseService) {}

  async create(createLecturerDto: CreateLecturerDto): Promise<Lecturer> {
    return this.databaseService.lecturer.create({
      data: {
        name: createLecturerDto.name,
        surname: createLecturerDto.surname,
        mail: createLecturerDto.mail,
      },
    });
  }

  async findAll(): Promise<Lecturer[]> {
    return this.databaseService.lecturer.findMany();
  }

  async findOne(id: number): Promise<Lecturer> {
    const lecturer = await this.databaseService.lecturer.findUnique({
      where: { id },
    });
    if (!lecturer) {
      throw new NotFoundException(`Lecturer with id ${id} not found`);
    }
    return lecturer;
  }

  async update(
    id: number,
    updateLecturerDto: UpdateLecturerDto,
  ): Promise<Lecturer> {
    await this.findOne(id);
    return this.databaseService.lecturer.update({
      where: { id },
      data: {
        name: updateLecturerDto.name,
        surname: updateLecturerDto.surname,
        mail: updateLecturerDto.mail,
      },
    });
  }

  async remove(id: number): Promise<Lecturer> {
    await this.findOne(id);
    return this.databaseService.lecturer.delete({
      where: { id },
    });
  }
}

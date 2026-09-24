import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultiesService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateFacultyDto) {
    return this.db.faculty.create({ data: dto });
  }

  findAll() {
    return this.db.faculty.findMany();
  }

  async findOne(shortcut: string) {
    const faculty = await this.db.faculty.findUnique({ where: { shortcut } });
    if (!faculty) throw new NotFoundException('Wydział nie istnieje');
    return faculty;
  }

  async update(shortcut: string, dto: UpdateFacultyDto) {
    await this.findOne(shortcut);
    return this.db.faculty.update({ where: { shortcut }, data: dto });
  }

  async remove(shortcut: string) {
    await this.findOne(shortcut);
    return this.db.faculty.delete({ where: { shortcut } });
  }
}
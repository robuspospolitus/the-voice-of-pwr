import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';

@Injectable()
export class LecturersFacultyService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateLecturersFacultyDto) {
    return this.db.lecturerFaculty.create({ data: dto });
  }

  findAll() {
    return this.db.lecturerFaculty.findMany();
  }

  async findOne(id: number) {
    const record = await this.db.lecturerFaculty.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Powiązanie nie istnieje');
    return record;
  }

  async update(id: number, dto: UpdateLecturersFacultyDto) {
    await this.findOne(id);
    return this.db.lecturerFaculty.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.lecturerFaculty.delete({ where: { id } });
  }
}
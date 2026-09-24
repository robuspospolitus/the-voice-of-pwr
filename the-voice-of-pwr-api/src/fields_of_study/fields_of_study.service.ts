import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateFieldsOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldsOfStudyDto } from './dto/update-fields_of_study.dto';

@Injectable()
export class FieldsOfStudyService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateFieldsOfStudyDto) {
    return this.db.fieldOfStudy.create({ data: dto });
  }

  findAll() {
    return this.db.fieldOfStudy.findMany();
  }

  async findOne(shortcut: string) {
    const field = await this.db.fieldOfStudy.findUnique({ where: { shortcut } });
    if (!field) throw new NotFoundException('Kierunek nie istnieje');
    return field;
  }

  async update(shortcut: string, dto: UpdateFieldsOfStudyDto) {
    await this.findOne(shortcut);
    return this.db.fieldOfStudy.update({ where: { shortcut }, data: dto });
  }

  async remove(shortcut: string) {
    await this.findOne(shortcut);
    return this.db.fieldOfStudy.delete({ where: { shortcut } });
  }
}
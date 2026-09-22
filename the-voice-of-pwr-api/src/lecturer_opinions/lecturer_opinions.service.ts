import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';

@Injectable()
export class LecturerOpinionsService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateLecturerOpinionDto, userId: number) {
    return this.db.lecturerOpinion.create({ data: { ...dto, userId } });
  }

  findAll() {
    return this.db.lecturerOpinion.findMany();
  }

  async findOne(id: number) {
    const opinion = await this.db.lecturerOpinion.findUnique({ where: { id } });
    if (!opinion) throw new NotFoundException('Opinia nie istnieje');
    return opinion;
  }

  async update(id: number, dto: UpdateLecturerOpinionDto) {
    await this.findOne(id);
    return this.db.lecturerOpinion.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.lecturerOpinion.delete({ where: { id } });
  }
}
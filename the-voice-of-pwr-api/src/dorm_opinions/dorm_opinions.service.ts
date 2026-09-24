import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';

@Injectable()
export class DormOpinionsService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateDormOpinionDto, userId: number) {
    return this.db.dormOpinion.create({ data: { ...dto, userId } });
  }

  findAll() {
    return this.db.dormOpinion.findMany();
  }

  async findOne(id: number) {
    const opinion = await this.db.dormOpinion.findUnique({ where: { id } });
    if (!opinion) throw new NotFoundException('Opinia nie istnieje');
    return opinion;
  }

  async update(id: number, dto: UpdateDormOpinionDto) {
    await this.findOne(id);
    return this.db.dormOpinion.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.db.dormOpinion.delete({ where: { id } });
  }
}
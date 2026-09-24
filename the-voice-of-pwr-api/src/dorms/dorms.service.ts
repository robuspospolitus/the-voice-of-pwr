import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateDormDto } from './dto/create-dorm.dto';
import { UpdateDormDto } from './dto/update-dorm.dto';

@Injectable()
export class DormsService {
  constructor(private db: DatabaseService) {}

  create(dto: CreateDormDto) {
    return this.db.dorm.create({ data: dto });
  }

  findAll() {
    return this.db.dorm.findMany();
  }

  async findOne(shortcut: string) {
    const dorm = await this.db.dorm.findUnique({ where: { shortcut } });
    if (!dorm) throw new NotFoundException('Akademik nie istnieje');
    return dorm;
  }

  async update(shortcut: string, dto: UpdateDormDto) {
    await this.findOne(shortcut);
    return this.db.dorm.update({ where: { shortcut }, data: dto });
  }

  async remove(shortcut: string) {
    await this.findOne(shortcut);
    return this.db.dorm.delete({ where: { shortcut } });
  }
}
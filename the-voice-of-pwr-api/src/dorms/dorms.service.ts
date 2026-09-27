import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDormDto } from './dto/create-dorm.dto';
import { UpdateDormDto } from './dto/update-dorm.dto';
import { DatabaseService } from 'src/database/database.service';
import { Dorm } from 'generated/prisma/client';

@Injectable()
export class DormsService {
  constructor(private databaseService: DatabaseService) {}

  async create(createDormDto: CreateDormDto): Promise<Dorm> {
    return this.databaseService.dorm.create({
      data: {
        shortcut: createDormDto.shortcut,
        fullName: createDormDto.fullName,
        localization: createDormDto.localization,
        capacity: createDormDto.capacity,
      },
    });
  }

  async findAll(): Promise<Dorm[]> {
    return this.databaseService.dorm.findMany();
  }

  async findOne(shortcut: string): Promise<Dorm> {
    const dorm = await this.databaseService.dorm.findUnique({
      where: { shortcut },
    });
    if (!dorm) {
      throw new NotFoundException(`Dorm with shortcut ${shortcut} not found`);
    }
    return dorm;
  }

  async update(shortcut: string, updateDormDto: UpdateDormDto): Promise<Dorm> {
    await this.findOne(shortcut);
    return this.databaseService.dorm.update({
      where: { shortcut },
      data: {
        shortcut: updateDormDto.shortcut,
        fullName: updateDormDto.fullName,
        localization: updateDormDto.localization,
        capacity: updateDormDto.capacity,
      },
    });
  }

  async remove(shortcut: string): Promise<Dorm> {
    await this.findOne(shortcut);
    return this.databaseService.dorm.delete({
      where: { shortcut },
    });
  }
}

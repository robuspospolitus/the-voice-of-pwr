import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';
import { DatabaseService } from 'src/database/database.service';
import { DormOpinion } from 'generated/prisma/client';

@Injectable()
export class DormOpinionsService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createDormOpinionDto: CreateDormOpinionDto,
  ): Promise<DormOpinion> {
    const [user, dorm] = await Promise.all([
      this.databaseService.user.findUnique({
        where: { id: createDormOpinionDto.userId },
      }),
      this.databaseService.dorm.findUnique({
        where: { shortcut: createDormOpinionDto.dormShortcut },
      }),
    ]);

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createDormOpinionDto.userId} not found`,
      );
    }
    if (!dorm) {
      throw new NotFoundException(
        `Dorm with shortcut ${createDormOpinionDto.dormShortcut} not found`,
      );
    }

    return this.databaseService.dormOpinion.create({
      data: {
        userId: createDormOpinionDto.userId,
        dormShortcut: createDormOpinionDto.dormShortcut,
        stars: createDormOpinionDto.stars,
        description: createDormOpinionDto.description,
      },
    });
  }

  async findAll(): Promise<DormOpinion[]> {
    return this.databaseService.dormOpinion.findMany();
  }

  async findOne(id: number): Promise<DormOpinion> {
    const opinion = await this.databaseService.dormOpinion.findUnique({
      where: { id },
    });
    if (!opinion) {
      throw new NotFoundException(`DormOpinion with id ${id} not found`);
    }
    return opinion;
  }

  async update(
    id: number,
    updateDormOpinionDto: UpdateDormOpinionDto,
  ): Promise<DormOpinion> {
    await this.findOne(id);
    return this.databaseService.dormOpinion.update({
      where: { id },
      data: {
        userId: updateDormOpinionDto.userId,
        dormShortcut: updateDormOpinionDto.dormShortcut,
        stars: updateDormOpinionDto.stars,
        description: updateDormOpinionDto.description,
      },
    });
  }

  async remove(id: number): Promise<DormOpinion> {
    await this.findOne(id);
    return this.databaseService.dormOpinion.delete({
      where: { id },
    });
  }
}

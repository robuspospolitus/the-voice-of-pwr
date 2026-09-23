import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';
import { DatabaseService } from 'src/database/database.service';
import { LecturerOpinion } from 'generated/prisma/client';

@Injectable()
export class LecturerOpinionsService {
  constructor(private databaseService: DatabaseService) {}

  async create(
    createLecturerOpinionDto: CreateLecturerOpinionDto,
  ): Promise<LecturerOpinion> {
    const [user, lecturer] = await Promise.all([
      this.databaseService.user.findUnique({
        where: { id: createLecturerOpinionDto.userId },
      }),
      this.databaseService.lecturer.findUnique({
        where: { id: createLecturerOpinionDto.lecturerId },
      }),
    ]);

    if (!user) {
      throw new NotFoundException(
        `User with ID ${createLecturerOpinionDto.userId} not found`,
      );
    }
    if (!lecturer) {
      throw new NotFoundException(
        `Lecturer with ID ${createLecturerOpinionDto.lecturerId} not found`,
      );
    }

    return this.databaseService.lecturerOpinion.create({
      data: {
        userId: createLecturerOpinionDto.userId,
        lecturerId: createLecturerOpinionDto.lecturerId,
        stars: createLecturerOpinionDto.stars,
        description: createLecturerOpinionDto.description,
      },
    });
  }

  async findAll(): Promise<LecturerOpinion[]> {
    return this.databaseService.lecturerOpinion.findMany();
  }

  async findOne(id: number): Promise<LecturerOpinion> {
    const opinion = await this.databaseService.lecturerOpinion.findUnique({
      where: { id },
    });
    if (!opinion) {
      throw new NotFoundException(`LecturerOpinion with id ${id} not found`);
    }
    return opinion;
  }

  async update(
    id: number,
    updateLecturerOpinionDto: UpdateLecturerOpinionDto,
  ): Promise<LecturerOpinion> {
    await this.findOne(id);
    return this.databaseService.lecturerOpinion.update({
      where: { id },
      data: {
        userId: updateLecturerOpinionDto.userId,
        lecturerId: updateLecturerOpinionDto.lecturerId,
        stars: updateLecturerOpinionDto.stars,
        description: updateLecturerOpinionDto.description,
      },
    });
  }

  async remove(id: number): Promise<LecturerOpinion> {
    await this.findOne(id);
    return this.databaseService.lecturerOpinion.delete({
      where: { id },
    });
  }
}

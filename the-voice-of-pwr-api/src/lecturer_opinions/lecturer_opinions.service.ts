import { Injectable } from '@nestjs/common';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';

@Injectable()
export class LecturerOpinionsService {
  create(createLecturerOpinionDto: CreateLecturerOpinionDto) {
    return 'This action adds a new lecturerOpinion';
  }

  findAll() {
    return `This action returns all lecturerOpinions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturerOpinion`;
  }

  update(id: number, updateLecturerOpinionDto: UpdateLecturerOpinionDto) {
    return `This action updates a #${id} lecturerOpinion`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturerOpinion`;
  }
}

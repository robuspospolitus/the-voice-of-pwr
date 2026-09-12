import { Injectable } from '@nestjs/common';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';

@Injectable()
export class DormOpinionsService {
  create(createDormOpinionDto: CreateDormOpinionDto) {
    return 'This action adds a new dormOpinion';
  }

  findAll() {
    return `This action returns all dormOpinions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dormOpinion`;
  }

  update(id: number, updateDormOpinionDto: UpdateDormOpinionDto) {
    return `This action updates a #${id} dormOpinion`;
  }

  remove(id: number) {
    return `This action removes a #${id} dormOpinion`;
  }
}

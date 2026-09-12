import { Injectable } from '@nestjs/common';
import { CreateDormDto } from './dto/create-dorm.dto';
import { UpdateDormDto } from './dto/update-dorm.dto';

@Injectable()
export class DormsService {
  create(createDormDto: CreateDormDto) {
    return 'This action adds a new dorm';
  }

  findAll() {
    return `This action returns all dorms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dorm`;
  }

  update(id: number, updateDormDto: UpdateDormDto) {
    return `This action updates a #${id} dorm`;
  }

  remove(id: number) {
    return `This action removes a #${id} dorm`;
  }
}

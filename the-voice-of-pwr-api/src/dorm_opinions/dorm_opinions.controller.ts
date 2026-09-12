import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DormOpinionsService } from './dorm_opinions.service';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';

@Controller('dorm-opinions')
export class DormOpinionsController {
  constructor(private readonly dormOpinionsService: DormOpinionsService) {}

  @Post()
  create(@Body() createDormOpinionDto: CreateDormOpinionDto) {
    return this.dormOpinionsService.create(createDormOpinionDto);
  }

  @Get()
  findAll() {
    return this.dormOpinionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dormOpinionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDormOpinionDto: UpdateDormOpinionDto) {
    return this.dormOpinionsService.update(+id, updateDormOpinionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dormOpinionsService.remove(+id);
  }
}

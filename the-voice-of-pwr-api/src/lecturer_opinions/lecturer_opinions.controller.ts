import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';

@Controller('lecturer-opinions')
export class LecturerOpinionsController {
  constructor(private readonly lecturerOpinionsService: LecturerOpinionsService) {}

  @Post()
  create(@Body() createLecturerOpinionDto: CreateLecturerOpinionDto) {
    return this.lecturerOpinionsService.create(createLecturerOpinionDto);
  }

  @Get()
  findAll() {
    return this.lecturerOpinionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturerOpinionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturerOpinionDto: UpdateLecturerOpinionDto) {
    return this.lecturerOpinionsService.update(+id, updateLecturerOpinionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerOpinionsService.remove(+id);
  }
}

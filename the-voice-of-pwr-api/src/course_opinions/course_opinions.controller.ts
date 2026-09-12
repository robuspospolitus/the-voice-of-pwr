import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseOpinionsService } from './course_opinions.service';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';

@Controller('course-opinions')
export class CourseOpinionsController {
  constructor(private readonly courseOpinionsService: CourseOpinionsService) {}

  @Post()
  create(@Body() createCourseOpinionDto: CreateCourseOpinionDto) {
    return this.courseOpinionsService.create(createCourseOpinionDto);
  }

  @Get()
  findAll() {
    return this.courseOpinionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseOpinionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseOpinionDto: UpdateCourseOpinionDto) {
    return this.courseOpinionsService.update(+id, updateCourseOpinionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseOpinionsService.remove(+id);
  }
}

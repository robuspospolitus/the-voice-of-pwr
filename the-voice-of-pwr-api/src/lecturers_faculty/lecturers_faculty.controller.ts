import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturersFacultyService } from './lecturers_faculty.service';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';

@Controller('lecturers-faculty')
export class LecturersFacultyController {
  constructor(private readonly lecturersFacultyService: LecturersFacultyService) {}

  @Post()
  create(@Body() createLecturersFacultyDto: CreateLecturersFacultyDto) {
    return this.lecturersFacultyService.create(createLecturersFacultyDto);
  }

  @Get()
  findAll() {
    return this.lecturersFacultyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturersFacultyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturersFacultyDto: UpdateLecturersFacultyDto) {
    return this.lecturersFacultyService.update(+id, updateLecturersFacultyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturersFacultyService.remove(+id);
  }
}

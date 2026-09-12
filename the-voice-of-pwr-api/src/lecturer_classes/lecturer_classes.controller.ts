import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LecturerClassesService } from './lecturer_classes.service';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';

@Controller('lecturer-classes')
export class LecturerClassesController {
  constructor(private readonly lecturerClassesService: LecturerClassesService) {}

  @Post()
  create(@Body() createLecturerClassDto: CreateLecturerClassDto) {
    return this.lecturerClassesService.create(createLecturerClassDto);
  }

  @Get()
  findAll() {
    return this.lecturerClassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lecturerClassesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturerClassDto: UpdateLecturerClassDto) {
    return this.lecturerClassesService.update(+id, updateLecturerClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerClassesService.remove(+id);
  }
}

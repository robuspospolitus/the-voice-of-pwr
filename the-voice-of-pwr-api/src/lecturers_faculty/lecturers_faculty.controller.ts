import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LecturersFacultyService } from './lecturers_faculty.service';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/prisma/client';

@Controller('lecturers-faculty')
export class LecturersFacultyController {
  constructor(private readonly lecturersFacultyService: LecturersFacultyService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturersFacultyDto: UpdateLecturersFacultyDto) {
    return this.lecturersFacultyService.update(+id, updateLecturersFacultyDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturersFacultyService.remove(+id);
  }
}
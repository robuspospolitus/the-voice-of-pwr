import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LecturerClassesService } from './lecturer_classes.service';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/prisma/client';

@Controller('lecturer-classes')
export class LecturerClassesController {
  constructor(private readonly lecturerClassesService: LecturerClassesService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLecturerClassDto: UpdateLecturerClassDto) {
    return this.lecturerClassesService.update(+id, updateLecturerClassDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lecturerClassesService.remove(+id);
  }
}
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FieldsOfStudyService } from './fields_of_study.service';
import { CreateFieldsOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldsOfStudyDto } from './dto/update-fields_of_study.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/prisma/client';

@Controller('fields-of-study')
export class FieldsOfStudyController {
  constructor(private readonly fieldsOfStudyService: FieldsOfStudyService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Post()
  create(@Body() createFieldsOfStudyDto: CreateFieldsOfStudyDto) {
    return this.fieldsOfStudyService.create(createFieldsOfStudyDto);
  }

  @Get()
  findAll() {
    return this.fieldsOfStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsOfStudyService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldsOfStudyDto: UpdateFieldsOfStudyDto) {
    return this.fieldsOfStudyService.update(id, updateFieldsOfStudyDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsOfStudyService.remove(id);
  }
}
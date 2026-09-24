import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CourseOpinionsService } from './course_opinions.service';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from '../../generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('course-opinions')
export class CourseOpinionsController {
  constructor(private readonly courseOpinionsService: CourseOpinionsService) {}

  @Post()
  create(@Body() dto: CreateCourseOpinionDto, @Req() req) {
    return this.courseOpinionsService.create(dto, req.user.id);
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
  async update(@Param('id') id: string, @Body() dto: UpdateCourseOpinionDto, @Req() req) {
    const opinion = await this.courseOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz edytować tylko własne opinie');
    }
    return this.courseOpinionsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const opinion = await this.courseOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz usuwać tylko własne opinie');
    }
    return this.courseOpinionsService.remove(+id);
  }
}
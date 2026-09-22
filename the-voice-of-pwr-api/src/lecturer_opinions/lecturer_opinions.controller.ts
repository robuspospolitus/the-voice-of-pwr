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
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from '../../generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('lecturer-opinions')
export class LecturerOpinionsController {
  constructor(private readonly lecturerOpinionsService: LecturerOpinionsService) {}

  @Post()
  create(@Body() dto: CreateLecturerOpinionDto, @Req() req) {
    return this.lecturerOpinionsService.create(dto, req.user.id);
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
  async update(@Param('id') id: string, @Body() dto: UpdateLecturerOpinionDto, @Req() req) {
    const opinion = await this.lecturerOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz edytować tylko własne opinie');
    }
    return this.lecturerOpinionsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const opinion = await this.lecturerOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz usuwać tylko własne opinie');
    }
    return this.lecturerOpinionsService.remove(+id);
  }
}
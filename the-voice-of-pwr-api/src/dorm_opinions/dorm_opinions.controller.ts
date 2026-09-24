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
import { DormOpinionsService } from './dorm_opinions.service';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from '../../generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dorm-opinions')
export class DormOpinionsController {
  constructor(private readonly dormOpinionsService: DormOpinionsService) {}

  @Post()
  create(@Body() dto: CreateDormOpinionDto, @Req() req) {
    return this.dormOpinionsService.create(dto, req.user.id);
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
  async update(@Param('id') id: string, @Body() dto: UpdateDormOpinionDto, @Req() req) {
    const opinion = await this.dormOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz edytować tylko własne opinie');
    }
    return this.dormOpinionsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const opinion = await this.dormOpinionsService.findOne(+id);
    if (opinion.userId !== req.user.id && req.user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Możesz usuwać tylko własne opinie');
    }
    return this.dormOpinionsService.remove(+id);
  }
}
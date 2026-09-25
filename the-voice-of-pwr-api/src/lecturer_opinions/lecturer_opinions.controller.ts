import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Req,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { LecturerOpinionsService } from './lecturer_opinions.service';
import { CreateLecturerOpinionDto } from './dto/create-lecturer_opinion.dto';
import { UpdateLecturerOpinionDto } from './dto/update-lecturer_opinion.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('lecturer-opinions')
export class LecturerOpinionsController {
  constructor(
    private readonly lecturerOpinionsService: LecturerOpinionsService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new lecturer opinion',
    description: 'Add a new opinion linked to the lecturer',
  })
  @ApiResponse({
    status: 201,
    description: 'The lecturer opinion has been successfully created.',
    type: CreateLecturerOpinionDto,
  })
  async create(
    @Body() createLecturerOpinionDto: CreateLecturerOpinionDto,
    @Req() req,
  ) {
    return this.lecturerOpinionsService.create(
      createLecturerOpinionDto,
      req.user.id,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of lecturer opinions',
    description: 'Retrieves a list of lecturer opinions from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of lecturer opinions has been successfully retrieved.',
    type: [CreateLecturerOpinionDto],
  })
  async findAll() {
    return this.lecturerOpinionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a lecturer opinion by ID',
    description: 'Retrieves a lecturer opinion by their unique ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The lecturer opinion has been successfully retrieved.',
    type: CreateLecturerOpinionDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lecturerOpinionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a lecturer opinion by ID',
    description: 'Updates a lecturer opinion by their unique ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The lecturer opinion has been successfully updated.',
    type: UpdateLecturerOpinionDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLecturerOpinionDto: UpdateLecturerOpinionDto,
    @Req() req,
  ) {
    const opinion = await this.lecturerOpinionsService.findOne(id);
    if (req.user.role !== UserRole.ADMIN && opinion.userId !== req.user.id) {
      throw new ForbiddenException('You can only edit your own review.');
    }
    return this.lecturerOpinionsService.update(+id, updateLecturerOpinionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a lecturer opinion by ID',
    description: 'Deletes a lecturer opinion by their unique ID.',
  })
  @ApiResponse({
    status: 204,
    description: 'The lecturer opinion has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const opinion = await this.lecturerOpinionsService.findOne(id);
    if (req.user.role !== UserRole.ADMIN && opinion.userId !== req.user.id) {
      throw new ForbiddenException('You can only remove your own review.');
    }
    return this.lecturerOpinionsService.remove(+id);
  }
}
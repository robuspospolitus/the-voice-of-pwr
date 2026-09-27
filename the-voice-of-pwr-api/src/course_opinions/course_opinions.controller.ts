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
import { CourseOpinionsService } from './course_opinions.service';
import { CreateCourseOpinionDto } from './dto/create-course_opinion.dto';
import { UpdateCourseOpinionDto } from './dto/update-course_opinion.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('course-opinions')
export class CourseOpinionsController {
  constructor(private readonly courseOpinionsService: CourseOpinionsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new course opinion',
    description: 'Add a new opinion linked to the course',
  })
  @ApiResponse({
    status: 201,
    description: 'The course opinion has been succesfully created.',
    type: CreateCourseOpinionDto,
  })
  async create(
    @Body() createCourseOpinionDto: CreateCourseOpinionDto,
    @Req() req,
  ) {
    return this.courseOpinionsService.create(
      createCourseOpinionDto,
      req.user.id,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of course opinions',
    description: 'Retrieves a list of course opinions from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of course opinions has been successfully retrieved.',
    type: [CreateCourseOpinionDto],
  })
  async findAll() {
    return this.courseOpinionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a course opinion by ID',
    description:
      'Retrieves a course opinion by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The course opinion has been successfully retrieved.',
    type: CreateCourseOpinionDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.courseOpinionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a course opinion by ID',
    description:
      'Updates a course opinion by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The course opinion has been successfully updated.',
    type: UpdateCourseOpinionDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseOpinionDto: UpdateCourseOpinionDto,
    @Req() req,
  ) {
    const opinion = await this.courseOpinionsService.findOne(id);
    if (req.user.role !== UserRole.ADMIN && opinion.userId !== req.user.id) {
      throw new ForbiddenException('You can only edit your own review.');
    }
    return this.courseOpinionsService.update(+id, updateCourseOpinionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a course opinion by ID',
    description:
      'Deletes a course opinion by their unique ID from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The course opinion has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const opinion = await this.courseOpinionsService.findOne(id);
    if (req.user.role !== UserRole.ADMIN && opinion.userId !== req.user.id) {
      throw new ForbiddenException('You can only remove your own review.');
    }
    return this.courseOpinionsService.remove(+id);
  }
}
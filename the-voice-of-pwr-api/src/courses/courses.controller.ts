import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Create a new course',
    description: 'Add a new course to the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The course has been successfully created.',
    type: CreateCourseDto,
  })
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of courses',
    description: 'Retrieves a list of courses from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of courses has been successfully retrieved.',
    type: [CreateCourseDto],
  })
  async findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a course by ID',
    description: 'Retrieves a course by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The course has been successfully retrieved.',
    type: CreateCourseDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Update a course by ID',
    description: 'Updates a course by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The course has been successfully updated.',
    type: UpdateCourseDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Delete a course by ID',
    description: 'Deletes a course by their unique ID from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The course has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.remove(+id);
  }
}
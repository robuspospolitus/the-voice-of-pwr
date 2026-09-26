import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
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

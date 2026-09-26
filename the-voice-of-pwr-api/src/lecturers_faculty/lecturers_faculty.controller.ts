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
import { LecturersFacultyService } from './lecturers_faculty.service';
import { CreateLecturersFacultyDto } from './dto/create-lecturers_faculty.dto';
import { UpdateLecturersFacultyDto } from './dto/update-lecturers_faculty.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('lecturer-faculties')
export class LecturersFacultyController {
  constructor(
    private readonly lecturerFacultiesService: LecturersFacultyService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new lecturer faculty relation',
    description: 'Add a new relation between lecturer and faculty',
  })
  @ApiResponse({
    status: 201,
    description: 'The relation has been successfully created.',
    type: CreateLecturersFacultyDto,
  })
  async create(@Body() createLecturerFacultyDto: CreateLecturersFacultyDto) {
    return this.lecturerFacultiesService.create(createLecturerFacultyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of lecturer faculty relations',
    description: 'Retrieves a list of relations from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of relations has been successfully retrieved.',
    type: [CreateLecturersFacultyDto],
  })
  async findAll() {
    return this.lecturerFacultiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a relation by ID',
    description: 'Retrieves a relation by ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The relation has been successfully retrieved.',
    type: CreateLecturersFacultyDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lecturerFacultiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a relation by ID',
    description: 'Updates a relation by ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The relation has been successfully updated.',
    type: UpdateLecturersFacultyDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLecturerFacultyDto: UpdateLecturersFacultyDto,
  ) {
    return this.lecturerFacultiesService.update(+id, updateLecturerFacultyDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a relation by ID',
    description: 'Deletes a relation by ID from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The relation has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.lecturerFacultiesService.remove(+id);
  }
}

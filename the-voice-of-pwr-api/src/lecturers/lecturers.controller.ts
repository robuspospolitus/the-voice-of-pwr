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
import { LecturersService } from './lecturers.service';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('lecturers')
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new lecturer',
    description: 'Add a new lecturer to the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The lecturer has been successfully created.',
    type: CreateLecturerDto,
  })
  async create(@Body() createLecturerDto: CreateLecturerDto) {
    return this.lecturersService.create(createLecturerDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of lecturers',
    description: 'Retrieves a list of lecturers from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of lecturers has been successfully retrieved.',
    type: [CreateLecturerDto],
  })
  async findAll() {
    return this.lecturersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a lecturer by ID',
    description: 'Retrieves a lecturer by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The lecturer has been successfully retrieved.',
    type: CreateLecturerDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lecturersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a lecturer by ID',
    description: 'Updates a lecturer by their unique ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The lecturer has been successfully updated.',
    type: UpdateLecturerDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLecturerDto: UpdateLecturerDto,
  ) {
    return this.lecturersService.update(+id, updateLecturerDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a lecturer by ID',
    description: 'Deletes a lecturer by their unique ID from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The lecturer has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.lecturersService.remove(+id);
  }
}

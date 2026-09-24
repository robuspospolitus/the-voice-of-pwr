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
import { LecturerClassesService } from './lecturer_classes.service';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('lecturer-classes')
export class LecturerClassesController {
  constructor(
    private readonly lecturerClassesService: LecturerClassesService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new lecturer class',
    description: 'Add a new class assignment',
  })
  @ApiResponse({
    status: 201,
    description: 'The assignment has been successfully created.',
    type: CreateLecturerClassDto,
  })
  async create(@Body() createLecturerClassDto: CreateLecturerClassDto) {
    return this.lecturerClassesService.create(createLecturerClassDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of lecturer classes',
    description: 'Retrieves assignments from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of assignments has been successfully retrieved.',
    type: [CreateLecturerClassDto],
  })
  async findAll() {
    return this.lecturerClassesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a lecturer class by ID',
    description: 'Retrieves an assignment by ID from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The assignment has been successfully retrieved.',
    type: CreateLecturerClassDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lecturerClassesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a lecturer class by ID',
    description: 'Updates an assignment by ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The assignment has been successfully updated.',
    type: UpdateLecturerClassDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLecturerClassDto: UpdateLecturerClassDto,
  ) {
    return this.lecturerClassesService.update(+id, updateLecturerClassDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a lecturer class by ID',
    description: 'Deletes an assignment by ID.',
  })
  @ApiResponse({
    status: 204,
    description: 'The assignment has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.lecturerClassesService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new faculty',
    description: 'Add a new faculty to the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The faculty has been successfully created.',
    type: CreateFacultyDto,
  })
  async create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of faculties',
    description: 'Retrieves a list of faculties from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of faculties has been successfully retrieved.',
    type: [CreateFacultyDto],
  })
  async findAll() {
    return this.facultiesService.findAll();
  }

  @Get(':shortcut')
  @ApiOperation({
    summary: 'Retrieve a faculty by shortcut',
    description:
      'Retrieves a faculty by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The faculty has been successfully retrieved.',
    type: CreateFacultyDto,
  })
  async findOne(@Param('shortcut') shortcut: string) {
    return this.facultiesService.findOne(shortcut);
  }

  @Patch(':shortcut')
  @ApiOperation({
    summary: 'Update a faculty by shortcut',
    description:
      'Updates a faculty by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The faculty has been successfully updated.',
    type: UpdateFacultyDto,
  })
  async update(
    @Param('shortcut') shortcut: string,
    @Body() updateFacultyDto: UpdateFacultyDto,
  ) {
    return this.facultiesService.update(shortcut, updateFacultyDto);
  }

  @Delete(':shortcut')
  @ApiOperation({
    summary: 'Delete a faculty by shortcut',
    description:
      'Deletes a faculty by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The faculty has been successfully deleted.',
  })
  async remove(@Param('shortcut') shortcut: string) {
    return this.facultiesService.remove(shortcut);
  }
}

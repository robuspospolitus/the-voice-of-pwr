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
import { LecturersService } from './lecturers.service';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('lecturers')
export class LecturersController {
  constructor(private readonly lecturersService: LecturersService) {}

  @Post()
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
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
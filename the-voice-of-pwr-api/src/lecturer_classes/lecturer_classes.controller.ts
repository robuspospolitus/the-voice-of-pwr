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
import { LecturerClassesService } from './lecturer_classes.service';
import { CreateLecturerClassDto } from './dto/create-lecturer_class.dto';
import { UpdateLecturerClassDto } from './dto/update-lecturer_class.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('lecturer-classes')
export class LecturerClassesController {
  constructor(
    private readonly lecturerClassesService: LecturerClassesService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
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
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FieldsOfStudyService } from './fields_of_study.service';
import { CreateFieldOfStudyDto } from './dto/create-fields_of_study.dto';
import { UpdateFieldOfStudyDto } from './dto/update-fields_of_study.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('fields-of-study')
export class FieldsOfStudyController {
  constructor(private readonly fieldsOfStudyService: FieldsOfStudyService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Create a new field of study',
    description: 'Add a new field of study to the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The field of study has been successfully created.',
    type: CreateFieldOfStudyDto,
  })
  async create(@Body() createFieldOfStudyDto: CreateFieldOfStudyDto) {
    return this.fieldsOfStudyService.create(createFieldOfStudyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of fields of study',
    description: 'Retrieves a list of fields of study from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of fields of study has been successfully retrieved.',
    type: [CreateFieldOfStudyDto],
  })
  async findAll() {
    return this.fieldsOfStudyService.findAll();
  }

  @Get(':shortcut')
  @ApiOperation({
    summary: 'Retrieve a field of study by shortcut',
    description:
      'Retrieves a field of study by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The field of study has been successfully retrieved.',
    type: CreateFieldOfStudyDto,
  })
  async findOne(@Param('shortcut') shortcut: string) {
    return this.fieldsOfStudyService.findOne(shortcut);
  }

  @Patch(':shortcut')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Update a field of study by shortcut',
    description:
      'Updates a field of study by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The field of study has been successfully updated.',
    type: UpdateFieldOfStudyDto,
  })
  async update(
    @Param('shortcut') shortcut: string,
    @Body() updateFieldOfStudyDto: UpdateFieldOfStudyDto,
  ) {
    return this.fieldsOfStudyService.update(shortcut, updateFieldOfStudyDto);
  }

  @Delete(':shortcut')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Delete a field of study by shortcut',
    description:
      'Deletes a field of study by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The field of study has been successfully deleted.',
  })
  async remove(@Param('shortcut') shortcut: string) {
    return this.fieldsOfStudyService.remove(shortcut);
  }
}
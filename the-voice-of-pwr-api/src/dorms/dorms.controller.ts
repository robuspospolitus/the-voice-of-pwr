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
import { DormsService } from './dorms.service';
import { CreateDormDto } from './dto/create-dorm.dto';
import { UpdateDormDto } from './dto/update-dorm.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma/client';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('dorms')
export class DormsController {
  constructor(private readonly dormsService: DormsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Create a new dorm',
    description: 'Add a new dorm to the database',
  })
  @ApiResponse({
    status: 201,
    description: 'The dorm has been successfully created.',
    type: CreateDormDto,
  })
  async create(@Body() createDormDto: CreateDormDto) {
    return this.dormsService.create(createDormDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of dorms',
    description: 'Retrieves a list of dorms from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of dorms has been successfully retrieved.',
    type: [CreateDormDto],
  })
  async findAll() {
    return this.dormsService.findAll();
  }

  @Get(':shortcut')
  @ApiOperation({
    summary: 'Retrieve a dorm by shortcut',
    description: 'Retrieves a dorm by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The dorm has been successfully retrieved.',
    type: CreateDormDto,
  })
  async findOne(@Param('shortcut') shortcut: string) {
    return this.dormsService.findOne(shortcut);
  }

  @Patch(':shortcut')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Update a dorm by shortcut',
    description: 'Updates a dorm by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'The dorm has been successfully updated.',
    type: UpdateDormDto,
  })
  async update(
    @Param('shortcut') shortcut: string,
    @Body() updateDormDto: UpdateDormDto,
  ) {
    return this.dormsService.update(shortcut, updateDormDto);
  }

  @Delete(':shortcut')
  @Roles(UserRole.ADMIN)
  @ApiOperation({
    summary: 'Delete a dorm by shortcut',
    description: 'Deletes a dorm by their unique shortcut from the database.',
  })
  @ApiResponse({
    status: 204,
    description: 'The dorm has been successfully deleted.',
  })
  async remove(@Param('shortcut') shortcut: string) {
    return this.dormsService.remove(shortcut);
  }
}
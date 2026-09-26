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
import { DormOpinionsService } from './dorm_opinions.service';
import { CreateDormOpinionDto } from './dto/create-dorm_opinion.dto';
import { UpdateDormOpinionDto } from './dto/update-dorm_opinion.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('dorm-opinions')
export class DormOpinionsController {
  constructor(private readonly dormOpinionsService: DormOpinionsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new dorm opinion',
    description: 'Add a new opinion linked to the dorm',
  })
  @ApiResponse({
    status: 201,
    description: 'The dorm opinion has been successfully created.',
    type: CreateDormOpinionDto,
  })
  async create(@Body() createDormOpinionDto: CreateDormOpinionDto) {
    return this.dormOpinionsService.create(createDormOpinionDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve a list of dorm opinions',
    description: 'Retrieves a list of dorm opinions from the database.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of dorm opinions has been successfully retrieved.',
    type: [CreateDormOpinionDto],
  })
  async findAll() {
    return this.dormOpinionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a dorm opinion by ID',
    description: 'Retrieves a dorm opinion by their unique ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The dorm opinion has been successfully retrieved.',
    type: CreateDormOpinionDto,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dormOpinionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a dorm opinion by ID',
    description: 'Updates a dorm opinion by their unique ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'The dorm opinion has been successfully updated.',
    type: UpdateDormOpinionDto,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDormOpinionDto: UpdateDormOpinionDto,
  ) {
    return this.dormOpinionsService.update(+id, updateDormOpinionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a dorm opinion by ID',
    description: 'Deletes a dorm opinion by their unique ID.',
  })
  @ApiResponse({
    status: 204,
    description: 'The dorm opinion has been successfully deleted.',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.dormOpinionsService.remove(+id);
  }
}

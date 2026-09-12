import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DormsService } from './dorms.service';
import { CreateDormDto } from './dto/create-dorm.dto';
import { UpdateDormDto } from './dto/update-dorm.dto';

@Controller('dorms')
export class DormsController {
  constructor(private readonly dormsService: DormsService) {}

  @Post()
  create(@Body() createDormDto: CreateDormDto) {
    return this.dormsService.create(createDormDto);
  }

  @Get()
  findAll() {
    return this.dormsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dormsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDormDto: UpdateDormDto) {
    return this.dormsService.update(+id, updateDormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dormsService.remove(+id);
  }
}

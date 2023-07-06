import { Controller, Get, Post, Res, HttpStatus, ParseIntPipe, Param } from '@nestjs/common';
import { Response } from 'express';

@Controller('dogs')
export class DogsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
     res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
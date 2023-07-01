import { Controller, Get, Redirect, Query, Param, Post, Body, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get('red')
    @Redirect('/cats', 307)
    redirect(@Query('q') q) {
        console.log('redirecting')
        if (q && q === 'google') return {url: 'https.www.google.com', statusCode: 300}
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return 'This action returns one cats id: ' + id
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto.age)
        this.catsService.create(createCatDto)
        return createCatDto
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }
}

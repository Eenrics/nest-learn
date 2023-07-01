import { Controller, Get, Redirect, Query, Param, Post, Body, Delete } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats'
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
        return 'This action adds a new cat'
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes a #${id} cat`;
    }
}

import { Controller, Get, Redirect, Query, Param, Post, Body, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';
import { User } from 'src/common/decorators/user.decorator';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get('/error')
    throwError() {
        throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
        throw new ForbiddenException
    }

    @Get('red')
    @Redirect('/cats', 307)
    redirect(@Query('q') q) {
        console.log('redirecting')
        if (q && q === 'google') return {url: 'https.www.google.com', statusCode: 300}
    }

    @Get('say-hi')
    async sayHi(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
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

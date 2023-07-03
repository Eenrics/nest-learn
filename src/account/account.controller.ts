import { Controller, HostParam, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller({ host: ':account.example.com' })
export class AccountController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account
    }
}

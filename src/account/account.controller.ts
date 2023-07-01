import { Controller, HostParam, Get } from '@nestjs/common';

@Controller({ host: ':account.example.com' })
export class AccountController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account
    }
}

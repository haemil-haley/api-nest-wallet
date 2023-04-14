import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SpendingAccountService } from "./spending.account.service";

class CreateAccountRequestDto {
  clientId: string;
  userId: bigint;
  createdBy: string;
}

class getAccountsRequestDto {
  clientId: string;
  userId: bigint;
}

@Controller("api/spending")
export class AccountController {
  constructor(
    private readonly spendingAccountService: SpendingAccountService
  ) {
  }

  @Post("accounts")
  create(@Body() request: CreateAccountRequestDto) {
    return this.spendingAccountService.create(request.userId, request.clientId, request.createdBy);
  }

  @Get("accounts/:clientId/users/:userId")
  getAccountsByUser(@Param() pathParam: getAccountsRequestDto) {
    return this.spendingAccountService.getAccountsByUser(pathParam.userId, pathParam.clientId);
  }
}
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Account } from "../model/account.entity";
import { AccountRepository } from "./account.repository";
import { TokenRepository } from "../token/token.repository";
import { UserRepository } from "../user/user.repository";

@Injectable()
export class SpendingAccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly tokenRepository: TokenRepository,
    private readonly userRepository: UserRepository
  ) {
  }

  async create(userId: bigint, clientId: string, createdBy: string) {
    const user = await this.userRepository.findOne(userId);
    if(!user) {
      throw new NotFoundException("해당하는 사용자가 없습니다.");
    }

    const tokens = await this.tokenRepository.findAll();
    const tokensForUserAccount = tokens.filter(token => { if (token.type !== 'platform') return token; });
    if(!tokensForUserAccount) {
      // 토큰정보는 ddl로 기본 insert 시키는데, database 조회 에러도 없이 넘어와서 데이터가 없는 상황은 백엔드에서 문제해결 필수.
      throw new InternalServerErrorException();
    }

    const accounts = await this.accountRepository.findAllByUserIdAndClientId(userId, clientId);
    if(accounts.length !== tokensForUserAccount.length) {
      for(const token of tokensForUserAccount) {
        const existAccount = accounts.find(account => { if (account.tokenId === token.id) return account; });
        if (!existAccount) {  // 해당 토큰의 user account 가 존재하지 않으면 생성
          const createAccountParam = {
            clientId: clientId,
            userId: userId,
            tokenId: token.id,
            createdAt: new Date(),
            createdBy: createdBy,
            updatedAt: new Date(),
            updatedBy: createdBy
          } as Account;

          await this.accountRepository.create(createAccountParam);
        }
      }
    }
  }

  getAccountsByUser(userId: bigint, clientId: string) {
    return this.accountRepository.findAllByUserIdAndClientId(userId,clientId);
  }
}
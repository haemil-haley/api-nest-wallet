import { Injectable } from "@nestjs/common";
import { Token } from "../model/token.entity";

@Injectable()
export class TokenRepository {

  findAll() {
    return Token.findAll().catch(e => { throw e; });
  }

  findOne(id: number) {
    return Token.findByPk(id).catch(e => { throw e; });
  }

  findOneBySymbol(symbol: string) {
    return Token.findOne({ where: { symbol } }).catch(e => { throw e; });
  }
}

import { Injectable } from "@nestjs/common";
import { Account } from "../model/account.entity";

@Injectable()
export class AccountRepository {

  findAll() {
    return Account.findAll().catch(e => { throw e; });
  }

  findOne(id: number) {
    return Account.findByPk(id).catch(e => { throw e; });
  }

  findAllByUserIdAndClientId(userId: bigint, clientId: string) {
    return Account.findAll({ where: { userId, clientId } }).catch(e => { throw e; });
  }

  create(account: Account) {
    return Account.create({ ...account }).catch(e => { throw e; });
  }

  update(id: number, params) {
    return Account.update({ ...params }, { where: { id }}).catch(e => {throw e; });
  }
}
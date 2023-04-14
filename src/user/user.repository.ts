import { Injectable } from "@nestjs/common";
import { UserView } from "../model/user.view.entity";

@Injectable()
export class UserRepository {

  findOne(id: bigint) {
    return UserView.findByPk(id).catch(e => { throw e; });
  }
}
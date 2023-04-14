import {
  AllowNull,
  AutoIncrement,
  Column,
  Default,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";

@Table({ tableName: "account" })
export class Account extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: bigint;

  @AllowNull(false)
  @Column({ field: "client_id" })
  clientId: string;

  @Column({ field: "user_id" })
  userId: bigint;

  @AllowNull(false)
  @Column({ field: "token_id" })
  tokenId: number;

  @Default(0)
  @Column
  balance: bigint;

  @Column({ field: "created_at" })
  createdAt: Date;

  @Column({ field: "created_by" })
  createdBy: string

  @Column({ field: "updated_at" })
  updatedAt: Date;

  @Column({ field: "updated_by" })
  updatedBy: string
}
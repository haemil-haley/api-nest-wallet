import {
  AllowNull,
  AutoIncrement,
  Column,
  Default,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";

@Table({ tableName: "token" })
export class Token extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  symbol: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  network: string;

  @Column
  address: string;

  @Column
  type: string;

  @AllowNull(false)
  @Column
  decimals: number;

  @Column({field: "logo_url" })
  logoUrl: string;

  @Default(0)
  @Column
  supply: bigint;

  @Default(true)
  @Column
  activated: boolean

  @Column({ field: "created_at" })
  createdAt: Date;

  @Column({ field: "created_by" })
  createdBy: string

  @Column({ field: "updated_at" })
  updatedAt: Date;

  @Column({ field: "updated_by" })
  updatedBy: string
}
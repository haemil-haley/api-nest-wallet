import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({ tableName: "user" })
export class UserView extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: bigint;

  @Column
  email: string;

  @Column
  nickname: string;

  @Column
  phone: string;

  @Column({ field: "created_at" })
  createdAt: Date;

  @Column({ field: "created_by" })
  createdBy: string

  @Column({ field: "updated_at" })
  updatedAt: Date;

  @Column({ field: "updated_by" })
  updatedBy: string
}
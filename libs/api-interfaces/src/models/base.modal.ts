import {Column, CreateDateColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from "typeorm";

export abstract class BaseModal {

  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  uuid?: string;

  @Column({
    default: ''
  })
  commit?: String;

  @Column(
    {nullable: true}
  )
  createTime?: string;

  @Column({
    nullable: true
  })
  updateTime?: string;
}

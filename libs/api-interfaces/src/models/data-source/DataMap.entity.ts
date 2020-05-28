import {BaseModal} from "../base.modal";
import {Column, Entity} from "typeorm";

@Entity()
export class DataMap extends BaseModal {

  @Column({
    nullable: true
  })
   label: string;
  @Column()
   value: string;
  @Column()
   type: string;
  @Column()
   name: string;
  @Column({
    nullable: true
  })
   checked: boolean;
  @Column({
    nullable: true
  })
   indeterminate: boolean;
}

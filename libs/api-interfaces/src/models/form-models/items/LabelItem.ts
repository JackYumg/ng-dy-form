import {ColItem} from "./ColItem";
import {Column, Entity} from "typeorm";

@Entity()
export class LabelItem extends ColItem {
  @Column()
  require: boolean;
  @Column()
  noIcon: boolean;
  @Column()
  zfor: string;
  @Column()
  type: string;

  @Column()
  label: string;
}

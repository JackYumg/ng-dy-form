import {ControlItem} from "../items/ControlItem";
import {Column, Entity} from "typeorm";

@Entity()
export class InputItem extends ControlItem {
  @Column()
  addOnAfter: string;
  @Column()
  addOnBefore: string;
  @Column()
  prefix: string;
  @Column()
  suffix: string;
  @Column()
  compact: boolean;
  @Column()
  search: boolean;
  @Column()
  type: string;
  @Column()
  autoResize: string;
}

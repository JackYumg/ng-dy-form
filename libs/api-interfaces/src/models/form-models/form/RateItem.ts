import {ControlItem} from "../items/ControlItem";
import {Column, Entity} from "typeorm";

@Entity()
export class RateItem extends ControlItem {

  @Column()
  private allowClear: boolean;
  @Column()
  private character: string;
  @Column()
  private count: number;
  @Column()
  private tooltips: string;
}

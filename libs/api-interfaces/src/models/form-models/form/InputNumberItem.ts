import {ControlItem} from "../items/ControlItem";
import {Column, Entity} from "typeorm";

@Entity()
export class InputNumberItem extends ControlItem {
  @Column()
  private max: number;
  @Column()
  private min: number;
  @Column()
  private step: number;
  @Column()
  private precision: number;
  @Column()
  private precisionMode: number;
}

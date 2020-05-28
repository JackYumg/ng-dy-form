import {ColItem} from "./ColItem";
import {Column} from "typeorm";

export abstract class ControlItem extends ColItem {
  @Column()
  bindFild: string;
  @Column()
  size: string;
  @Column()
  disabled: boolean;
  @Column()
  typeId: string;
}

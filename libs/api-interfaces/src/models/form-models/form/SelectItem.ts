import {ControlItem} from "../items/ControlItem";
import {Column, Entity, ManyToMany} from "typeorm";
import {DataMap} from "../../data-source/DataMap.entity";

@Entity()
export class SelectItem extends ControlItem {
  @Column()
  allowClear: boolean;
  @Column()
  borderLess: boolean;
  @Column()
  open: boolean;
  @Column()
  dropdownMatchSelectWidth: Boolean;
  @Column()
  dropdownStyle: string;
  @Column()
  maxMultipleCount: number;
  @Column()
  mode: string;
  @ManyToMany(type => DataMap)
  dataMaps: DataMap[]
}

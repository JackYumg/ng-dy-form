import {ControlItem} from "../items/ControlItem";
import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {DataMap} from "../../data-source/DataMap.entity";

@Entity()
export class RadioItem extends ControlItem {

  @Column()
  private name: string;
  @Column()
  private type: string;

  @ManyToMany(type => DataMap)
  @JoinTable()
  dataMaps: DataMap[];
}

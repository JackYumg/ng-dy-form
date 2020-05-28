import {BaseModal} from "../../base.modal";
import {LabelItem} from "./LabelItem";
import {Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import {ControlItem} from "./ControlItem";
import {FormEntity} from "./Form.entity";
import {InputItem, InputNumberItem, RadioItem, RateItem, SelectItem} from "../form";
import {RowItem} from "./RowItem";

@Entity()
export class FormItem extends RowItem {
  @OneToOne(type => LabelItem)
  @JoinColumn()
  labelItem: LabelItem;

  @OneToOne(type => InputItem)
  @JoinColumn()
  inputItem: InputItem;

  @OneToOne(type => InputNumberItem)
  @JoinColumn()
  inputNumItem: InputNumberItem;

  @OneToOne( type => RadioItem)
  @JoinColumn()
  radioItem: RadioItem;

  @OneToOne( type => RateItem)
  @JoinColumn()
  rateItem: RateItem;

  @OneToOne( type => SelectItem)
  @JoinColumn()
  selectItem: SelectItem;
}

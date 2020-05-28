import {BaseModal} from "../../base.modal";
import {Column, Entity, JoinTable, ManyToMany, OneToMany} from "typeorm";
import {FormItem} from "./FormItem";

@Entity()
export class FormEntity extends BaseModal {
  @Column()
  layout: string;

  @ManyToMany(type =>  FormItem)
  @JoinTable()
  formItems: FormItem[];
}

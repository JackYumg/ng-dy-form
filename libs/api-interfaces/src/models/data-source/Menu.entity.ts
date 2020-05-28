import {BaseModal} from "../base.modal";
import {Column, Entity, ManyToOne, OneToMany, Tree, TreeChildren, TreeParent} from "typeorm";

@Entity()
@Tree("nested-set")
export class Menu extends BaseModal {
  @Column()
  isParent: boolean;

  @Column()
  order: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @TreeParent()
  parent: Menu;

  @TreeChildren()
  children: Menu;

  @Column()
  route: string;

  @Column()
  level: number;
}

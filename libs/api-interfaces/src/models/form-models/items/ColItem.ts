import {BaseModal} from "../../base.modal";
import {Column} from "typeorm";

export abstract class ColItem extends BaseModal {
  @Column()
  flex: string;

  @Column()
  offset: number;

  @Column()
  order: number;

  @Column()
  pull: number;

  @Column()
  push: number;

  @Column()
  span: number;

  @Column()
  xs: number;

  @Column()
  sm: number;

  @Column()
  md: number;

  @Column()
  lg: number;

  @Column()
  xl: number;

  @Column()
  xxl: number;
}

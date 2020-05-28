import {BaseModal} from "../../base.modal";
import {Column} from "typeorm";

export abstract class RowItem extends BaseModal {
  @Column()
  gutter: string;

  @Column()
  justify: string;
}

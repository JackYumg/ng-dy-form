import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm";
import {DataMap} from "../../../../../../libs/api-interfaces/src/models/data-source/DataMap.entity";

@Injectable()
export class DataMapDaoService {
  private manage = getManager();

  insertDataMap(dataMap: DataMap) {
    return this.manage.getRepository(DataMap).save(dataMap);
  }

  updateDataMap(dataMap: DataMap) {
    return this.manage.getRepository(DataMap).update({id: dataMap.id}, dataMap);
  }

  findDataMaps(skip: number, pageSzie: number, name, type) {
    return this.manage.getRepository(DataMap).createQueryBuilder('dataMap').where('dataMap.name like :name', {name: `%${name}%`}).andWhere('dataMap.type like :type', {type: `%${type}%`}).limit(pageSzie).offset(skip).getManyAndCount();
  }

  deleteDataMap(dataMapId) {
    return this.manage.getRepository(DataMap).delete({id: dataMapId});
  }

  findDataMapByNames(names: string[]) {
    return this.manage.getRepository(DataMap).createQueryBuilder('datMap').where('datMap.name in (:names)', {names: names}).getMany();
  }
}

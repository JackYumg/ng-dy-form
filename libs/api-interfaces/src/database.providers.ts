import {createConnection} from 'typeorm';
import {DataMap} from "./models/data-source/DataMap.entity";
import {Menu} from "./models/data-source/Menu.entity";
import {InputItem, InputNumberItem, RadioItem, RateItem, SelectItem} from "./models/form-models/form";
import {ColItem, ControlItem, FormEntity, FormItem, LabelItem} from "./models/form-models/items";
import {Photo, User} from "./models/form-models/test";

const dataSources = [
  DataMap,
  Menu
];

const FormModels = [
  InputItem,
  InputNumberItem,
  SelectItem,
  RadioItem,
  RateItem,
  LabelItem,
  ControlItem,
  ColItem,
  FormEntity,
  FormItem,
  User,
  Photo
];
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      return await createConnection({
        type: 'mysql',
        host: '118.24.26.23',
        port: 3366,
        username: 'root',
        password: 'wym123...',
        database: 'dtbd',
        entities: [
          ...dataSources,
          ...FormModels
        ],
        synchronize: true,
        logger: 'advanced-console',
        logging: 'all'
      })
    }
  },
];

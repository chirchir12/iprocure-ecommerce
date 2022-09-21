import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, SEQUELIZE, TEST, PRODUCTION } from '../constants';
import { dbConfig } from '../config';

export const dbConProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = dbConfig.dev;
          break;
        case TEST:
          config = dbConfig.test;
          break;
        case PRODUCTION:
          config = dbConfig.prod;
          break;
        default:
          config = dbConfig.dev;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

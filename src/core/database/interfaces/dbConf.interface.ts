export interface IdbConfigAttr {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number | string;
  dialect: string;
}

export interface IdbConfig {
  dev: IdbConfigAttr;
  prod: IdbConfigAttr;
  test: IdbConfigAttr;
}

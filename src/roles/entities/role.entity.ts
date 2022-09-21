import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Role extends Model<Role> {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;
}

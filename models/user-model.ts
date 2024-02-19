import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export default class users extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    password!: string;

    @Column({
        type: DataType.ENUM('admin', 'client'),
        allowNull: false,
    })
    role!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    invites!: string;
}
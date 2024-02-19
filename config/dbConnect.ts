import { Sequelize } from 'sequelize-typescript';
import users from "../models/user-model";
const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize({
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    dialect: 'mysql'
});

sequelize.addModels([users]);



export const initializeDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

initializeDatabase();
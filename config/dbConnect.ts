import { Sequelize } from 'sequelize-typescript';
const {sql_db, sql_host, sql_username, sql_password } = process.env;

const sequelize = new Sequelize({
    host: sql_host,
    database: sql_db,
    username: sql_username,
    password: sql_password,
    dialect: 'mysql'
});


export const initializeDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
}

initializeDatabase();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('n1_b2_mobile','root','123456',  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

export default sequelize;
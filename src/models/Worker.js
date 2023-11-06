import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Companies from "./Companies.js";

const Worker = sequelize.define('Worker', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    speciality: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    company_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Companies,
            key: 'id',
        },
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updateAt: {
        type: DataTypes.DATE
    }
});

export default Worker;
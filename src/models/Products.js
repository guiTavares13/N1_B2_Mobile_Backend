import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Companies from './Companies.js';
import ProductTypes from './ProductTypes.js';

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    company_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Companies,
            key: 'id',
        },
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductTypes,
            key: 'id',
        }
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Product;

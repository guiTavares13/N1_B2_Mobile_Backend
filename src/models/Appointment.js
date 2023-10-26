import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import User from './Users.js';
import Worker from './Worker.js'
import Product from './Products.js';

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    worker_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Worker,
            key: 'id',
        },
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id',
        },
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default Appointment;

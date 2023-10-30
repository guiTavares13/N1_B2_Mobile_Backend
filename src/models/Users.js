import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('client', 'admin'),
        defaultValue: 'client',
        allowNull: false,
    }
});

User.prototype.hashPassword = async function() {
    this.password = await bcrypt.hash(this.password, 10);
}

User.prototype.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

User.beforeCreate(async (user) => {
    await user.hashPassword();
})

User.prototype.generateToken = function() {
    return jwt.sign({id: this.id, role: this.role}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
};

export default User;
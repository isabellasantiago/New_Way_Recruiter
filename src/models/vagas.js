"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vagasModelo = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const sequelize_1 = require("sequelize");
const connectDB_1 = require("../database/connectDB");
const vagasModelo = connectDB_1.newWayDB.define('cadvagas', {
    idvaga: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nivel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    requisito: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    beneficios: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.vagasModelo = vagasModelo;

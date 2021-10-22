"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaModelo = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const sequelize_1 = require("sequelize");
const connectDB_1 = require("../database/connectDB");
const empresaModelo = connectDB_1.newWayDB.define('cadempresa', {
    codempresa: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    razaosocial: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nomefantasia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    endereco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sobre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    linkedin:{
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estilo:{
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    logoemp:{
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.empresaModelo = empresaModelo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatoModelo = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const sequelize_1 = require("sequelize");
const connectDB_1 = require("../database/connectDB");
const candidatoModelo = connectDB_1.newWayDB.define('cadcandidato', {
    idcandidato: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true
    },
});
exports.candidatoModelo = candidatoModelo;

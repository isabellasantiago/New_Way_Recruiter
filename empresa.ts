/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { DataTypes } from "sequelize";
import { newWayDB } from "../database/connectDB";

const empresaModelo = newWayDB.define ('cadempresa', {

    codempresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    razaosocial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nomefantasia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  


})

export { empresaModelo };
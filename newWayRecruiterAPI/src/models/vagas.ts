/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { DataTypes } from "sequelize";
import { newWayDB } from "../database/connectDB";

const vagasModelo = newWayDB.define ('cadvagas', {

    idvaga: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    requisito: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    beneficios: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})

export { vagasModelo };
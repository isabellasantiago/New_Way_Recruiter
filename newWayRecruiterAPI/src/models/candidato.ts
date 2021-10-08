/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { DataTypes } from "sequelize";
import { newWayDB } from "../database/connectDB";

const candidatoModelo = newWayDB.define ('cadcandidatos', {

    idcandidato: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
    },

})

export { candidatoModelo };
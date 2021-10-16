/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { DataTypes } from "sequelize";
import { newWayDB } from "../database/connectDB";

const candidatoModelo = newWayDB.define ('cadcandidato', {

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
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },

})

export { candidatoModelo };
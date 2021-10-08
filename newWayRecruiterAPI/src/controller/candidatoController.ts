/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { newWayDB } from "../database/connectDB";
import { candidatoModelo } from "../models/candidato";

class candidatoController {
    async create (req: Request, res: Response) 
    {
        const {cpf, senha, email, telefone, sobrenome, nome} = req.body;
        const candidato = await candidatoModelo.create ({
            nome,
            sobrenome,
            telefone,
            email,
            senha,
            cpf,
        });

        return res.status(201).json(candidato);
    }
}

// eslint-disable-next-line new-cap
export default new candidatoController();

/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { candidatoModelo } from "../models/candidato";

class candidatoController {
    async create (req: Request, res: Response) {
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

    async findAll (req: Request, res: Response) {
        const candi = await candidatoModelo.findAll();
        return candi.length > 0 ? 
        res.status(200).json(candi) :
        res.status(204).send();
    }

    async findById (req: Request, res: Response) {
        const { id } = req.params;
        const candidato = await candidatoModelo.findAll({
            where: {
                idcandidato: id,
            },
        });
        return  candidato ? 
        res.status(200).json(candidato) :
        res.status(204).send()
    }

    async update (req: Request, res: Response) {
        const { id } = req.params;
        const {telefone, sobrenome, nome} = req.body;
        const candidato = await candidatoModelo.update ({
            nome,
            sobrenome,
            telefone,
        },
            {
                where: {
                    idcandidato: id,
                },
            });
        return res.status(201).json(candidato);
    }

    async delete (req: Request, res: Response) {
        const { id } = req.params;
        const candidato = await candidatoModelo.destroy({
            where: {
                idcandidato: id,
            },
        });
        return  res.status(200).json(candidato);
    }

    async autenticar (req: Request, res: Response) {
        const { email, senha } = req.body;

        const usuario = await candidatoModelo.findAll({
            where: {
                email: email,
                senha: senha,
            },
        });
        if (!usuario) {
            return res.status(400).send();
        }else {
        return  res.status(200).json(usuario);
        };
    }
    
}

// eslint-disable-next-line new-cap
export default new candidatoController();

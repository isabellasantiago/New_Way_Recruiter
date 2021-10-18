/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { empresaModelo } from "../models/empresa";

class empresaController {
    async create (req: Request, res: Response) {
        const {sobre, endereco, email, cnpj, senha, nomefantasia, razaosocial} = req.body;
        const empresa = await empresaModelo.create ({
            razaosocial,
            nomefantasia,
            senha,
            cnpj,
            email,
            endereco,
            sobre,
        });
        return res.status(201).json(empresa);
    }

    async findAll (req: Request, res: Response) {
        const empre = await empresaModelo.findAll();
        return empre.length > 0 ? 
        res.status(200).json(empre) :
        res.status(204).send();
    }

    async findById (req: Request, res: Response) {
        const { id } = req.params;
        const empresa = await empresaModelo.findAll({
            where: {
                codempresa: id,
            },
        });
        return  empresa ? 
        res.status(200).json(empresa) :
        res.status(204).send()
    }

    async update (req: Request, res: Response) {
        const { id } = req.params;
        const {endereco, sobre, nomefantasia} = req.body;
        const empresa = await empresaModelo.update ({
            nomefantasia,
            sobre,
            endereco,
        },
            {
                where: {
                    codempresa: id,
                },
            });
        return res.status(201).json(empresa);
    }
    
}

// eslint-disable-next-line new-cap
export default new empresaController();
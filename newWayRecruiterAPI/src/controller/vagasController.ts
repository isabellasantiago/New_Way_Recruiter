import { Request, Response } from "express";
import { vagasModelo } from "../models/vagas";

class vagasController {
    async create (req: Request, res: Response) {
        const {area, beneficios, requisito, salario, nivel, titulo} = req.body;
        const vaga = await vagasModelo.create ({
            titulo,
            nivel,
            salario,
            requisito,
            beneficios,
            area,
        });
        return vaga? 
        res.status(201).json(vaga):
        res.status(204).send();
    }

    async findAll (req: Request, res: Response) {
        const vaga = await vagasModelo.findAll();
        return vaga.length > 0 ? 
        res.status(200).json(vaga) :
        res.status(204).send();
    }
    
}

// eslint-disable-next-line new-cap
export default new vagasController();

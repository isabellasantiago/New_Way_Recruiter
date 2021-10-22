import { Request, Response } from "express";
import { candidatoModelo } from "../models/candidato";
import { empresaModelo } from "../models/empresa";


class entrar {
    async autenticarCandidato (req: Request, res: Response) {
        const { email, senha } = req.body;
        const candidato = await candidatoModelo.findOne({
            where: {
                email: email,
                senha: senha,
            },
        });
        return  candidato ? 
        res.status(200).json("Login de candidato efetuado!") :
        res.status(400).json("Email ou senha incorreto!");

    }
    async autenticarEmpresa (req: Request, res: Response) {
        const { email, senha } = req.body;
        const empresa = await empresaModelo.findOne({
            where: {
                email: email,
                senha: senha,
            },
        });
        return  empresa ? 
        res.status(200).json("Login da empresa efetuado!") :
        res.status(400).json("Email ou senha incorreto!");

    }

}
 export default new entrar();
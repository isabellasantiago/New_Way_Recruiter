"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candidato_1 = require("../models/candidato");
class candidatoController {
    async create(req, res) {
        const { cpf, senha, email, telefone, sobrenome, nome } = req.body;
        const candidato = await candidato_1.candidatoModelo.create({
            nome,
            sobrenome,
            telefone,
            email,
            senha,
            cpf,
        });
<<<<<<< HEAD
=======
        return res.status(201).json(candidato);
    }
    async findAll(req, res) {
        const candi = await candidato_1.candidatoModelo.findAll();
        return candi.length > 0 ?
            res.status(200).json(candi) :
            res.status(204).send();
    }
    async findById(req, res) {
        const { id } = req.params;
        const candidato = await candidato_1.candidatoModelo.findAll({
            where: {
                idcandidato: id,
            },
        });
        return candidato ?
            res.status(200).json(candidato) :
            res.status(204).send();
    }
    async update(req, res) {
        const { id } = req.params;
        const { telefone, sobrenome, nome } = req.body;
        const candidato = await candidato_1.candidatoModelo.update({
            nome,
            sobrenome,
            telefone,
        }, {
            where: {
                idcandidato: id,
            },
        });
        return res.status(201).json(candidato);
    }
    async delete(req, res) {
        const { id } = req.params;
        const candidato = await candidato_1.candidatoModelo.destroy({
            where: {
                idcandidato: id,
            },
        });
        return res.status(200).json(candidato);
    }
    async autenticar(req, res) {
        const { email, senha } = req.body;
        const candidato = await candidato_1.candidatoModelo.findOne({
            where: {
                email: email,
                senha: senha,
            },
        });
        return candidato ?
            res.status(200).json("Login efetuado!") :
            res.status(400).json("Email ou senha incorreto!");
>>>>>>> bf732958490d38d9a56907d24a17a09a77fb0f4c
    }
}
// eslint-disable-next-line new-cap
exports.default = new candidatoController();

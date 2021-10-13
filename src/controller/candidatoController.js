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
    }
}
// eslint-disable-next-line new-cap
exports.default = new candidatoController();

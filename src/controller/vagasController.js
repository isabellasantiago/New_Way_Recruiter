"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vagas_1 = require("../models/vagas");
class vagasController {
    async create(req, res) {
        const { area, beneficios, requisito, salario, nivel, titulo } = req.body;
        const vaga = await vagas_1.vagasModelo.create({
            titulo,
            nivel,
            salario,
            requisito,
            beneficios,
            area,
        });
        return vaga ?
            res.status(201).json(vaga) :
            res.status(204).send();
    }
    async findAll(req, res) {
        const vaga = await vagas_1.vagasModelo.findAll();
        return vaga.length > 0 ?
            res.status(200).json(vaga) :
            res.status(204).send();
    }
}
// eslint-disable-next-line new-cap
exports.default = new vagasController();

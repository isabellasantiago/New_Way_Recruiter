"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = require("../models/empresa");
class empresaController {
    async create(req, res) {
        const { logoemp, estilo, linkedin, sobre, endereco, email, cnpj, senha, nomefantasia, razaosocial } = req.body;
        const empresa = await empresa_1.empresaModelo.create({
            razaosocial,
            nomefantasia,
            senha,
            cnpj,
            email,
            endereco,
            sobre,
            linkedin,
            estilo,
            logoemp,
        });
        return res.status(201).json(empresa);
    }
    async findAll(req, res) {
        const empre = await empresa_1.empresaModelo.findAll();
        return empre.length > 0 ?
            res.status(200).json(empre) :
            res.status(204).send();
    }
    async findById(req, res) {
        const { id } = req.params;
        const empresa = await empresa_1.empresaModelo.findAll({
            where: {
                codempresa: id,
            },
        });
        return empresa ?
            res.status(200).json(empresa) :
            res.status(204).send();
    }
    async update(req, res) {
        const { id } = req.params;
        const { logoemp , linkedin, endereco, sobre, nomefantasia } = req.body;
        const empresa = await empresa_1.empresaModelo.update({
            nomefantasia,
            sobre,
            endereco,
            linkedin,
            logoemp,
        }, {
            where: {
                codempresa: id,
            },
        });
        return res.status(201).json(empresa);
    }

    async delete(req, res) {
        const { id } = req.params;
        const empresa = await empresa_1.empresaModelo.destroy({
            where: {
                codempresa: id,
            },
        });
        return res.status(200).json(empresa);
    }
}
// eslint-disable-next-line new-cap
exports.default = new empresaController();

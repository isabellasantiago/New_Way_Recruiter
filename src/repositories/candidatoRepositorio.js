"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatoRepositorio = void 0;
var candidato_1 = require("../model/candidato");
var CandidatoRepositorio = /** @class */ (function () {
    function CandidatoRepositorio() {
    }
    CandidatoRepositorio.prototype.create = function (_a) {
        var senha = _a.senha, email = _a.email, cpf = _a.cpf, telefone = _a.telefone, sobrenome = _a.sobrenome, nome = _a.nome;
        var candidato = new candidato_1.candidatomodelo();
        Object.assign(candidato, {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            cpf: cpf,
            email: email,
            senha: senha,
        });
    };
    return CandidatoRepositorio;
}());
exports.CandidatoRepositorio = CandidatoRepositorio;

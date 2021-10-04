"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _empresareposicao = void 0;
export { _empresareposicao as empresareposicao };
var empresareposicao = /** @class */ (function () {
    function empresareposicao() {
    }
    empresareposicao.prototype.create = function (_a) {
        var senha = _a.senha, email = _a.email, cnpj = _a.cnpj, nomefantasia = _a.nomefantasia, razaosocial = _a.razaosocial, sobre = _a.sobre, endereco = +_a.endereco;
        var empresa = new empresa_1.candidatomodelo();
        Object.assign(empresa, {
            razaosocial: razaosocial,
            nomefantasia: nomefantasia,
            cnpj: cnpj,
            sobre: sobre,
            endereco: endereco,
            emailempresa: emailempresa,
            senha: senha,
        });
    };
    return empresareposicao;
}());
const _empresareposicao = empresareposicao;
export { _empresareposicao as empresareposicao };
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa = void 0;
var express_1 = require("express");
var empresareposicao_1 = require("empresareposicao");
var empresa = (0, express_1.Router)();
exports.empresa = empresa;
var empresareposicao = new empresareposicao_1.empresareposicao();
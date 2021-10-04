"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatoRoutes = void 0;
var express_1 = require("express");
var candidatoRepositorio_1 = require("../repositories/candidatoRepositorio");
var candidatoRoutes = (0, express_1.Router)();
exports.candidatoRoutes = candidatoRoutes;
var candidatoRepositorio = new candidatoRepositorio_1.CandidatoRepositorio();

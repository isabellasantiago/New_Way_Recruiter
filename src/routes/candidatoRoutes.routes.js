"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatoRouter = void 0;
/* eslint-disable prettier/prettier */
const express_1 = __importDefault(require("express"));
const candidatoController_1 = __importDefault(require("../controller/candidatoController"));
const candidatoRouter = express_1.default.Router();
exports.candidatoRouter = candidatoRouter;
<<<<<<< HEAD
candidatoRouter.post("/cadcandidato", candidatoController_1.default.create);
=======
candidatoRouter.post("/candidato", candidatoController_1.default.create); //cria um candidato
candidatoRouter.get("/allcandidatos", candidatoController_1.default.findAll); //lista todos os candidatos
candidatoRouter.get("/onecandidato/:id", candidatoController_1.default.findById); //lista um candidato pelo ID
candidatoRouter.put("/candidato/:id", candidatoController_1.default.update); //atualiza determinados dados de um usuario
candidatoRouter.delete("/deletecandidato/:id", candidatoController_1.default.delete); //deleta um candidato
candidatoRouter.post("/login", candidatoController_1.default.autenticar); //verifica se um candidato esta cadastrado
>>>>>>> bf732958490d38d9a56907d24a17a09a77fb0f4c

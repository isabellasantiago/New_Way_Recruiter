"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vagasRouter = void 0;
const express_1 = __importDefault(require("express"));
const vagasController_1 = __importDefault(require("../controller/vagasController"));
const vagasRouter = express_1.default.Router();
exports.vagasRouter = vagasRouter;
vagasRouter.post("/vaga", vagasController_1.default.create); //cria uma vaga
vagasRouter.get("/allvagas", vagasController_1.default.findAll); //lista todas as vagas

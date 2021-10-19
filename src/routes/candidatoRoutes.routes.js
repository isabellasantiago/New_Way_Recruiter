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
candidatoRouter.post("/cadcandidato", candidatoController_1.default.create);

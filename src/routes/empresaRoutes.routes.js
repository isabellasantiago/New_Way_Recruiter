"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaRouter = void 0;
const express_1 = __importDefault(require("express"));
const empresaController_1 = __importDefault(require("../controller/empresaController"));
const empresaRouter = express_1.default.Router();
exports.empresaRouter = empresaRouter;
empresaRouter.post("/empresa", empresaController_1.default.create);
empresaRouter.get("/allempresas", empresaController_1.default.findAll);
empresaRouter.get("/oneempresa/:id", empresaController_1.default.findById);
empresaRouter.put("/empresa/:id", empresaController_1.default.update);
empresaRouter.delete("/deleteempresa/:id", empresaController_1.default.delete);

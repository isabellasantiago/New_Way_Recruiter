import express from "express";
import vagasController from "../controller/vagasController";

const vagasRouter = express.Router();

vagasRouter.post("/vaga", vagasController.create);     //cria uma vaga
vagasRouter.get("/allvagas", vagasController.findAll);    //lista todas as vagas

export { vagasRouter };
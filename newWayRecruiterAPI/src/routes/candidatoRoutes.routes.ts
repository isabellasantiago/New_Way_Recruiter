/* eslint-disable prettier/prettier */
import express from "express";
import candidatoController from "../controller/candidatoController";

const candidatoRouter = express.Router();

candidatoRouter.post("/candidato", candidatoController.create);     //cria um candidato
candidatoRouter.get("/allcandidatos", candidatoController.findAll);    //lista todos os candidatos
candidatoRouter.get("/onecandidato/:id", candidatoController.findById);    //lista um candidato pelo ID
candidatoRouter.put("/candidato/:id", candidatoController.update);  //atualiza determinados dados de um usuario

export { candidatoRouter };
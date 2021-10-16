/* eslint-disable prettier/prettier */
import express from "express";
import candidatoController from "../controller/candidatoController";

const candidatoRouter = express.Router();

candidatoRouter.post("/candidato", candidatoController.create);     //cria um candidato
candidatoRouter.get("/allcandidatos", candidatoController.findAll);    //lista todos os candidatos
candidatoRouter.get("/onecandidato/:id", candidatoController.findById);    //lista um candidato pelo ID
candidatoRouter.put("/candidato/:id", candidatoController.update);  //atualiza determinados dados de um usuario
candidatoRouter.delete("/deletecandidato/:id", candidatoController.delete);    //deleta um candidato
candidatoRouter.post("/login", candidatoController.autenticar);    //verifica se um candidato esta cadastrado


export { candidatoRouter };
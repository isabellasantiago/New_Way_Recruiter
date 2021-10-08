/* eslint-disable prettier/prettier */
import express from "express";
import candidatoController from "../controller/candidatoController";

const candidatoRouter = express.Router();

candidatoRouter.post("/candidato", candidatoController.create);

export { candidatoRouter };
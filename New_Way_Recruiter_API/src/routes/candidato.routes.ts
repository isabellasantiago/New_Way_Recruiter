import { request, response, Router } from "express";
import { CandidatoRepositorio } from "../repositories/candidatoRepositorio";

const candidatoRoutes = Router();

const candidatoRepositorio = new CandidatoRepositorio();


export { candidatoRoutes }
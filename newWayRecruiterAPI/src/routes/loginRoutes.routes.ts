import express from "express";
import entrar from "../controller/loginController";

const loginRouter= express.Router() 

loginRouter.post("/logincandidato", entrar.autenticarCandidato);
loginRouter.post("/loginempresa", entrar.autenticarEmpresa);

export { loginRouter }
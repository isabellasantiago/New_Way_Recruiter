import express from "express";
import empresaController from "../controller/empresaController";

const empresaRouter = express.Router();

empresaRouter.post("/empresa", empresaController.create);     
empresaRouter.get("/allempresas", empresaController.findAll);    
empresaRouter.get("/oneempresa/:id", empresaController.findById);    
empresaRouter.put("/empresa/:id", empresaController.update);  

export { empresaRouter };
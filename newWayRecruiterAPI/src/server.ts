/* eslint-disable prettier/prettier */
import express, { json } from "express";
import { newWayDB } from "./database/connectDB";
import { candidatoRouter } from "./routes/candidatoRoutes.routes";
import { empresaRouter } from "./routes/empresaRoutes.routes";
import { loginRouter } from "./routes/loginRoutes.routes";
import { vagasRouter } from "./routes/vagasRoutes.routes";

const app = express();

app.use(json());

app.use(candidatoRouter);
app.use(vagasRouter);
app.use(empresaRouter);
app.use(loginRouter);

app.listen(3333, async () => {
    await newWayDB.sync();
    console.log("Server running on port 3333!");
});

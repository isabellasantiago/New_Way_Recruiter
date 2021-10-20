"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const express_1 = __importStar(require("express"));
const connectDB_1 = require("./database/connectDB");
const candidatoRoutes_routes_1 = require("./routes/candidatoRoutes.routes");
const vagasRoutes_routes_1 = require("./routes/vagasRoutes.routes");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = (0, express_1.default)();
app.use(cors(corsOptions));
app.use((0, express_1.json)());
app.use(candidatoRoutes_routes_1.candidatoRouter);
app.use(vagasRoutes_routes_1.vagasRouter);
app.listen(3333, async () => {
    await connectDB_1.newWayDB.sync();
    console.log("Server running on port 3333!");
});

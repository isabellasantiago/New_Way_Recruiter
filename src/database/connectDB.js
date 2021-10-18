"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newWayDB = void 0;
/* eslint-disable prettier/prettier */
const sequelize_1 = require("sequelize");
const newWayDB = new sequelize_1.Sequelize('newwayrec', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});
exports.newWayDB = newWayDB;

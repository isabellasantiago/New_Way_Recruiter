/* eslint-disable prettier/prettier */
import { Sequelize } from "sequelize";

const newWayDB = new Sequelize('newwayrec', 'root', '', {
    host: 'localhost',
    dialect:'mysql' ,
    port:3306,
  });

export { newWayDB };

// Same as:
// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize")

import dbConfig from "../config/db.config.js";
import Sequelize from sequelize;

const sequelize=new Sequelize(
  dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases=false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {}

db.Sequelize=Sequelize;
db.sequelize=Sequelize;

db.tutorials=require("./tutorial.model.js")(sequelize, Sequelize);
module.exports=db;

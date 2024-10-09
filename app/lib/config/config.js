"use strict"

const {Sequelize} = require("sequelize");
require("dotenv").config();

const {MYSQL_DBNAME,MYSQL_DIALECT,MYSQL_HOST,MYSQL_PASSWORD,MYSQL_USERNAME} =process.env;


//sequelize 인스턴스 생성
const sequelize = new Sequelize(MYSQL_DBNAME,MYSQL_USERNAME,MYSQL_PASSWORD,{
    host: MYSQL_HOST,
    dialect: MYSQL_DIALECT
});

//DB 연결 테스트
sequelize.authenticate()
    .then(()=>{
        console.log("Database connection has been established successfully.");
    }).catch(err =>{
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;
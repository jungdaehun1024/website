"use strict"

const {Sequelize} = require("sequelize");


//sequelize 인스턴스 생성

const sequelize = new Sequelize("website","root","182074",{
    host: "localhost",
    dialect: "mysql"
});

//DB 연결 테스트
sequelize.authenticate()
    .then(()=>{
        console.log("Database connection has been established successfully.");
    }).catch(err =>{
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;
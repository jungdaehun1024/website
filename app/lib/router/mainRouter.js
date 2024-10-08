"use strict"

module.exports = (app)=>{
    const express = require("express");
    const maincontroller =require("../controller/mainController");
    const router = express.Router();

    router.get("/",maincontroller.main.index);
    app.use("/",router);

};
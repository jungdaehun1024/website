"use strict"
module.exports = (app) =>{
  const express = require("express");
  const signupController = require("../controller/signupController")
  const router = express.Router();

  router.get("/",signupController.main.index);

  app.use("/signup",router);
}

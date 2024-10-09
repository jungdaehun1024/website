const express = require("express");
require("dotenv").config();
const app = express();
require("./lib/router/mainRouter")(app);
require("./lib/router/siginupRouter")(app);

const  { sequelize } = require('./lib/models/users');
sequelize.sync({ force: false })
            .then(()=>{
                console.log("DB 연결 성공")
            }).catch((err)=>{
                console.error(err);
            })

app.set("views","./lib/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/public`))
module.exports = app;

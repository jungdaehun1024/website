const app = require("../app"); 
const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`서버가동 [포트번호: ${PORT}]`);
})
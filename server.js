const express = require('express');  //calling express Js
const serverConfig =require('./configs/serverConfig')

const app = express();   //central charecter


app.listen(serverConfig.PORT, ()=>{
    console.log("server started");
})
const express = require("express");
const cors = require("cors");
const app = express();
const mainController = require("./src/controllers/scrap.controller");

app.use(cors());
app.use("/",mainController);
app.listen(3002,()=>{
    console.log("Listening");
})
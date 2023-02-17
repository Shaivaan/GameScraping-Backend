const express = require("express");
const  {error_msg} = require("../scrap_api/assets");
const { get_all, get_individual } = require("../scrap_api/util");
const router = express.Router();

router.get("/data",async(req,res)=>{
    try{
        const data = await get_all();
        console.log(data);
        return res.send({res:data});
    }
    catch{
        const error = error_msg;
        return error;
    }
});

router.get("/individual/:name/:code",async(req,res)=>{
    try{
        const data = await get_individual(req.params.name,req.params.code);
        return res.send({res:data});
    }
    catch{
        const error = error_msg;
        return error;
    }
});


module.exports = router;
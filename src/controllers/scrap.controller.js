const express = require("express");
const  {error_msg} = require("../scrap_api/assets");
const { get_all, get_individual, get_search_games } = require("../scrap_api/util");
const router = express.Router();

router.get("/data",async(req,res)=>{
    try{
        const data = await get_all();
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

router.get("/search/:value",async(req,res)=>{
    try{
        const data = await get_search_games(req.params.value);
        return res.send({res:data});
    }
    catch{
        const error = error_msg;
        return error;
    }
});


module.exports = router;
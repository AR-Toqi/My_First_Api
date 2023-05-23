const express=require("express");
const HelloControler = require("../Controlers/HelloControler");
const router=express.Router();


// This is my first get routing

router.get("/Hello-get",HelloControler.HelloGet)
router.post("/Hello-post",HelloControler.HelloPost)


module.exports=router;
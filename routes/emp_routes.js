let express = require("express");
let router = express.Router();

router.post("/register", (req, res)=>{
    let data = req.body;
    res.send(data.name);
})

router.post("/login", (req, res)=>{
    res.send("login page called");
})

router.get("/viewtasks", (req, res)=>{
    res.send("view tasks called");
})

router.get("/viewtodo", (req, res)=>{
    res.send("view todo called");
})

router.put("/updateprofile", (req, res)=>{
    res.send("update profile called");
})

module.exports = router;
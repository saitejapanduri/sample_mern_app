let express = require("express");
let router = express.Router();
let bcrypt = require('bcrypt')

let {users} = require('../models/users')

router.post("/register", async (req, res)=>{
    let data = req.body;
    data.password = await bcrypt.hash(data.password, 10);
    let newuser = new users(data);
    let result = await newuser.save();
    res.send(result);
})

router.post("/login", async (req, res)=>{
    let user = await users.findOne({email: req.body.email});
    if (user) {
        let passmatch = await bcrypt.compare(req.body.password,user.password);
        if (passmatch) {
            res.send({"msg": "Login Success", 
                "user": {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        }else{
            res.send({"msg": "Login Failed"});
        }
    } else{
        res.send({"msg": "email invalid"});
    }
})

router.get("/viewtasks", (req, res)=>{
    res.send("view tasks called");
})

router.get("/viewtodo", (req, res)=>{
    res.send("view todo called");
})

router.patch("/updateprofile/:id", async (req, res)=>{
    let data = req.body;
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    let updatedata = await users.findByIdAndUpdate(req.params.id, {$set: data});
    res.send(updatedata);
})


module.exports = router;
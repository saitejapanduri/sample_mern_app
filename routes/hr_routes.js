let express = require("express");
let router = express.Router();

router.get("/employees", (req, res)=>{
    res.send("Employess called");
})

router.post("/assign-task", (req, res)=>{
    res.send("assign task page called");
})

router.get("/tasks", (req, res)=>{
    res.send("tasks called");
})

router.get("/notifications", (req, res)=>{
    res.send("notifications called");
})

module.exports = router;

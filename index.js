let express = require("express");
let hrroutes = require("./routes/hr_routes");
let app = express();

app.use("/api/hr", hrroutes);

// //local host: 3000/
// app.get("/", (req, res)=>{
//     res.send("Home page called");
// })

// //local host: 3000/aboutus
// app.get("/aboutus", (req, res)=>{
//     res.send("about page called");
// })

// app.post("/addStudent", (req, res)=>{
//     res.send("add student page called");
// })

// run the server in the port 3000
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})
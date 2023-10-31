require('dotenv').config();

var express =  require("express");
var bodyparser = require("body-parser");
var fs = require("fs");

var app = express();

const PORT = process.env.PORT || '3000';

app.use(bodyparser.json({limit:"50mb"}));// file size can be big.so this setting is done.
app.use(bodyparser.urlencoded({limit:"50mb", extended:true}));
app.use(bodyparser.json());// comming json data setting

app.use(express.static("public"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST ,GET ,PUT ,PATCH ,DELETE");
        return res.status(200).json({})
       }
       next();
});

app.get("/", (req, res)=>{
    res.end("Welcome to backend");
});

app.use("/admincharges" ,require("./routes/admincharges"));
app.use("/newagent" ,require("./routes/newagent"));
app.use("/newclient" ,require("./routes/newclient"));
app.use("/newkyc" ,require("./routes/newkyc"));
app.use("/clientpayment" ,require("./routes/clientpayment"));
app.use("/agentidwise" ,require("./routes/agentidwise"));
app.use("/getclient" ,require("./routes/getclient"));
app.use("/daycount" ,require("./routes/daycount"));
app.use("/admin" ,require("./routes/admin"));
app.use("/addagentid", require("./routes/addagentid"));


app.listen(PORT, ()=>{
    console.log(`Project is running on https://localhost:${PORT}/`);
})
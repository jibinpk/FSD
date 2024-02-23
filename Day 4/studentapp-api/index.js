const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res) => {
    console.log("request received");
    res.json("Hello World");
});

app.get("/hi",(req,res) => {
    console.log("hi request received");
    res.json("Welcome with nodemon");
});

app.get("/people",(req,res) => {
    console.log("people request received");
    res.json([{name: "Jibin",role:"Student"},{name: "Taylor",role:"Singer"}]);
});

app.get("/students",(req,res)=> {
    console.log("students request received");
    res.json([{name: "Jibin",age:"21",department:"cse"},{name:"Adam",age:"23",department:"ece"},{name:"Taylor",age:"21",department:"cse"}]);
});

app.post("/students",(req,res)=>{
    console.log(req.body);
});
    
app.listen("4000", () => {
    console.log("Started server on 4000");
})
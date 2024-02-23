const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();
app.use(cors());
app.use(bodyParser.json());


let Students = require('./student.model');

mongoose.connect("mongodb+srv://jibinpkkd:uAVbBwWwGDsh4Uh8@cluster0.wdwq5tn.mongodb.net/fsdprojects?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("MongoDB connection established successfully");
})

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

app.get("/students/:id", async (req,res) => {
    let id = req.params.id;
    let data = await Students.findById(id).catch(err => {
        res.json("Error finding student");
    });
    if(!data) {
        res.json("Not Found");
    }
    else{
        res.json(data);
    }

})



app.get("/students", async (req,res)=> {
    console.log("students request received");
    let data = await Students.find().catch(err => {
        res.json("Error loading data")
    });
    res.json(data);

    // res.json([{name: "Jibin",age:"21",department:"cse"},{name:"Adam",age:"23",department:"ece"},{name:"Taylor",age:"21",department:"cse"}]);
});

app.post("/students",(req,res)=>{
    console.log(req.body);
    let student = new Students(req.body);
    student
    .save()
    .then(()=>{res.json("Saved successfully");
    })
    .catch(err=>{
    res.json("Error: " + err);
    });

});
    
app.listen("4000", () => {
    console.log("Started server on 4000");
})
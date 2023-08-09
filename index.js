import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var taskList = []
var workList = []

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("index.ejs")
})

app.get("/home", (req,res) =>{
    res.render("index.ejs", {"list": taskList})
})

app.post("/submit", (req,res) =>{
    const userInput = req.body.newTask
    taskList.push(userInput)
    res.render("index.ejs", {"newTask" : userInput, "list": taskList})
    
})

app.post("/taskDelete", (req,res) => {
    const deletedItem = req.body.deletedTask
    const deletedTask = taskList[deletedItem]
    taskList.splice(deletedItem, 1)
    res.render("index.ejs", {"list": taskList})
})

app.post("/workDelete", (req,res) => {
    const deletedItem = req.body.deletedTask
    workList.splice(deletedItem, 1)
    res.render("work.ejs", {"list": workList})
})

app.get("/work", (req,res) =>{
    res.render("work.ejs", {"list": workList})
})

app.post("/workSubmit", (req,res) =>{
    const userInput = req.body.newTask
    workList.push(userInput)
    res.render("work.ejs", {"newTask" : userInput, "list" : workList})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });




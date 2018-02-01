
var mongoose=require("../models/db");
var todo=require("../models/todo");
var user=require("../models/user");
var express=require("express");
var bodyParser=require("body-parser")
var app=express();
app.use(bodyParser.json())
var obj={
    text:"Another todo task",
    completed:false,
    completedAt:123
}

app.get("/todos",(req,res)=>{
todo.Todo.find({completed:false}).
  limit(10).
  sort({ occupation: -1 }).
  select({ text: 1,_id:0}).
  exec(function(error,result){
    res.send(result);
  });
    
});


app.post("/todos",(req,res)=>{
    obj.text=req.body.Text;
    obj.completed=req.body.completed;
    obj.completedAt=req.body.time;
    var newTodo=new todo.Todo(obj);
    newTodo.save().then((doc)=>{
        res.send(doc+" Added to database")
    },(e)=>{
        res.send("Unable to add  to database")
    });
    console.log(req.body);
})

app.listen(process.env.PORT,function(){
    console.log("Started at port:30000")
})





// var addUser=new user.User({Email:"Jobayer@webpers.com"});
// addUser.save().then((doc)=>{
//     console.log(doc.Email+" Added to database");
//     mongoose.mongoose.connection.close();
// },(e)=>{
//     console.log("Unable to add user");
//     mongoose.mongoose.connection.close();
// })

var mongoose=require("../models/db");
var todo=require("../models/todo");
var user=require("../models/user");
var app=require("express")
app.listen(3000,function(){
    console.log("Started at port:30000")
})


// var obj={
//     text:"Another todo task",
//     completed:false,
//     completedAt:123
// }
// var newTodo=new Todo(obj);
// newTodo.save().then((doc)=>{
//     console.log("Saved todo"+doc)
// },(e)=>{
//     console.log("Unable to save")
// });


// var addUser=new user.User({Email:"Jobayer@webpers.com"});
// addUser.save().then((doc)=>{
//     console.log(doc.Email+" Added to database");
//     mongoose.mongoose.connection.close();
// },(e)=>{
//     console.log("Unable to add user");
//     mongoose.mongoose.connection.close();
// })
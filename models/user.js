var mongoose=require("./db")


var User=mongoose.mongoose.model("User",{
    Email:{
        type:String,
        required: [true, 'Why no bacon?']
    }
})

module.exports={User}
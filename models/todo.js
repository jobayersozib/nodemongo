var mongoose=require('./db')

var Todo=mongoose.mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
})

module.exports={Todo}

var MongoClient = require('mongodb').MongoClient
  //, assert = require('assert');
//
// Connection URL
var url = 'mongodb://localhost:27017/todoList';

const todoListarr=[
    {
        id:1,
        Title:"First todo task",
        completed:false
    },
    {
        id:2,
        Title:"Second todo task",
        completed:true
    }
    ,
    {
        id:3,
        Title:"Third todo task",
        completed:false
    },
    {
        id:4,
        Title:"Fourth todo task",
        completed:true
    }
]
var insertDocuments = function(db, callback) {
   
    var collection = db.collection('documents');
    collection.insertMany(todoListarr, function(err, result) {
     console.log("Inserted "+todoListarr.length+" documents into the collection");
      callback(result);
    });
  }


  var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({'id':7}).toArray(function(err, docs) {
      //assert.equal(err, null);
      if(docs.length > 0){
        console.log("Found the following records");
        callback(docs);
      }
      else{
          callback("Nothing found")
      }
      
     // console.log(docs);
     
    });      
     
  }

  var updateDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ 'id' : 2 }
      , { $set: { 'Title' :"Edited value" } }, function(err, result) {
      //assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });  
  }

MongoClient.connect(url, function(err, db) {
  
  console.log("Connected successfully to server");
  updateDocument(db,function(result){
      console.log(result);
  });
  db.close();


});


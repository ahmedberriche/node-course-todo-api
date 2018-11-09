// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5be55fdecc1f4324d239f5ee")
  }, {
      $set: {
          name: "Jackson"
      },
  
      $inc: {
          age: 2
      }
  }, {
      returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

   //db.close();
});
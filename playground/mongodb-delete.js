// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Yuki'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b676cbefffc46779d60c4ae")
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });

  // db.close();
});

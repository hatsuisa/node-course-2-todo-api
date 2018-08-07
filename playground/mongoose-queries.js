const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b6830cd49223b2c8f9690df11';
//
// if (!ObjectID.isValid (id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))

var id = '5b683ce86d1edb7d93a1381e';

User.findById(id).then((user) => {
  if (!user) {
     return console.log('Id not found');
  }
  console.log('Todo By Id', JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e))

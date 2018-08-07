const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5b69555d4a717669a59a5344').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({_id: '5b69556e4a717669a59a5357'}).then((todo) => {
  console.log(todo);
})

const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log("OOPS");
  }
  console.log('connected');

  // db.collection('Todos').deleteMany({
  //   text: 'et loonch'
  // }).then((result) => {
  //   console.log(result);
  //     //db.close();
  // });});
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b5aabac8bbfb64298051dde")
    }).then((result) => {console.log(result)})
});

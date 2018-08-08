const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log("OOPS");
  }
  console.log('connected');
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5b5ab9d998e42da978cf1d0c")
  }, {
    $set: {
      completed: false
    }
    }, {
      returnOriginal: false
    }
  ).then((result) => {console.log(result)})
});

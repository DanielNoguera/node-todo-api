const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log("OOPS");
  }
  console.log('connected');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b5aa970f737d81d34229264')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("it did not work", err);
  // });
  //db.close();
  db.collection('Users').find({
    'firstname': 'DAWEL'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("it did not work", err);
  });
});

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("unable to connect to server");
  }
  console.log('connected');
  const db = client.db('todoApp');
  db.collection('Users').insertOne({
    firstname: 'daniel',
    age:'15',
    location: 'none of your buissiness'
  }, (err, result) => {
    if (err) {
      return console.log('Uable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  });
  client.close();
})
//     text: 'something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Uable to insert todo', err)
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2))
//   });
//   client.close();
// })


const mongoose = require('mongoose');

module.exports = function database() {
  // connecting to mongoDB
  mongoose.connect(process.env.MONGO_URI);

  // check for a connection
  const db = mongoose.connection;
  db.on('error', (e) => console.log(e));
  db.on('open', (e) => console.log('Connected to MongoDB'));
  db.on('close', () => console.log('MongoDB disconnected'));
}
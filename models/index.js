const mongoose = require('mongoose')
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/expressDBTutorial').
  then(console.log('DataBase Connected!')).
  catch(error => console.error('Data base connection error: ', error));

const userSchema = new Schema({
  user: {type: String, required: true },
  timeStamp: { type: String, default: Date.now, required: true },
  age: {type: Number, required: true },
  gender: {type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

// requesting all the things we need for the class
const mongoose = require('mongoose')
const { Schema } = mongoose;
// Setting up the rules for the class and using a const that we are going to reuse in the index 
const animalsSchema = new Schema({

  Quantity: Number,
  name: String,
  breed: String,
  IsAlive: Boolean,

})
// define the constructor for the class
const Animals = mongoose.model('Animals', animalsSchema);

module.exports = Animals
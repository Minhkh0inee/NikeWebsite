const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength:600},
    image: { type: String, maxLength: 255},
    slug: {type:String, maxLength:255},
    price: { type: String, maxLength: 255},
    p1: { type: String, maxLength: 255},
    p2: { type: String, maxLength: 255},
    p3: { type: String, maxLength: 255},
    tilte: { type: String, maxLength: 600},
},{
  timestamps:true,
}
  );


  module.exports = mongoose.model('Course', Course);
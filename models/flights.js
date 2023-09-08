
const mongoose = require('mongoose');

const date = new Date();

function addOneYear (date) {
  date.setFullYear(date.getFullYear() + 1);
  return date;
}

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    required: true
  },
  arrival: {
    type: Date,
    required: true,
    default: addOneYear(date)
  }
})

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },

  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },

  departs: {
    type: Date,
    required: true,
    default: addOneYear(date)
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    required: true
  },
  destinations: [destinationSchema]
})



const Flight = mongoose.model('Flight', flightSchema);
// const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Flight;
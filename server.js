
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine');
require('dotenv').config();
const methodOverride = require('method-override');

// connect to DB
const database = require('./config/database');
// import flight schema
const Flight = require('./models/flights');

const PORT = 3000;

// * App Config
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine());

// * Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));


// Routes
app.get('/', (req, res) => {
  res.send(`
    <a href='/flights'>View all flights</a>
    <br />
    <a href='/flights/new'>Create a new flight</a>
    <br />
  `);
});

// Index 
app.get('/flights', async (req, res) => {
  const flightsFromDB = await Flight.find({});
  res.render('Index', {
    flights: flightsFromDB
  });
})

// Create new flight
app.get('/flights/new', (req, res) => {
  res.render('New');
})

app.post('/flights', async (req, res) => {
  try {
    await Flight.create(req.body);
  } catch (e) {
    console.log(e);
  }
  res.redirect('/flights');
})

// Show view
app.get('/flights/:id', async (req, res) => {
  const {id} = req.params;

  const flight = await Flight.findById(id);

  res.render('Show', {
    flight: flight
  });
})

// Addint destination with arrival 
app.put('/flights/:id', async (req, res) => {
  const {id} = req.params;

  try {
    // const flight = await Flight.findById(id);
    const {airport, arrival} = req.body;
    const newDestination = {
      airport,
      arrival
    };

    const updatedFlight = await Flight.findByIdAndUpdate(
      id, 
      { $push: {destinations: newDestination }},
      {new: true}
    );

    // flight.destinations.push(newDestination);
    res.redirect(`/flights/${id}`);
  } catch (e) {
    console.log(e);
  }
  
})

database();
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
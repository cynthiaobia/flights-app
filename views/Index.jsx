
const React = require('react');

function Index (props) {

  const {flights} = props;
  return (
    <div>
      <h1>List of Flights</h1>
      <a href='/flights/new'>Create a New Flight</a>
      
      <div>
        <div>
          Airline | Flight No. | Departure Date
        </div>

        <ul>
          {
            flights.map(
              (flight, i) => {
                return (
                  <li key={i}>
                    {flight.airline} {flight.flightNo} {flight.departs.toISOString()}
                    <a href={`/flights/${flight._id}`}>Details</a>
                  </li>
                )
              }
            )
          }
        </ul>

      </div>
    </div>
  )
}

module.exports = Index;
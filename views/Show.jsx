
const React = require('react');

function Show (props) {

  const {flight} = props;
  console.log(flight);
  return (
    <div>
      <h1>Flight Details</h1>
      Airline: {flight.airline}
      <br />
      Flight Number: {flight.flightNo}
      <br />
      Departure Date: {flight.departs.toISOString()}
      <br />
      Airport: {flight.airport}
      <br />

      {/* { 
        flight.destinations ? 
        `Your current destination is ${flight.destinations.airport}` :
        `You currently do not have a destination or arrival date`
      } */}

      <h2>Add A Destination with Arrival</h2>
      <form action={`/flights/${flight._id}?_method=PUT`} method='POST'>
      {/* <form action={`/flights/${flight._id}`} method='POST'> */}
        Airport:
        <br />
        <select name='airport'>
          <option value='AUS'>AUS</option>
          <option value='DAL'>DAL</option>
          <option value='LAX'>LAX</option>
          <option value='SAN'>SAN</option>
          <option value='SEA'>SEA</option>
        </select>
        <br />

        Arrival Date:
        <br />
        <input type='datetime-local' name='arrival' required/>
        <br />
        <input type='submit' value='Update' />
      </form>
      <br />
      <a href='/flights'>Back to all flights</a>
    </div>
  )
}

module.exports = Show;
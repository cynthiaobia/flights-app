
const React = require('react');

function New (props) {
  return (

    <div>
      <h1>Create a New Flight</h1>

      <form action='/flights' method='POST'>

        Airline: 
        <input type='text' name='airline' required/>
        <br />

        Airport:
        <select name='airport'>
          <option value='AUS'>AUS</option>
          <option value='DAL'>DAL</option>
          <option value='LAX'>LAX</option>
          <option value='SAN'>SAN</option>
          <option value='SEA'>SEA</option>
        </select>
        <br />

        Flight Number: 
        <input type='number' name='flightNo' required />
        <br />

        Departure Date: 
        <input type='datetime-local' name='departs' required/>
        <br />

        <input type='submit' value='Create Flight' />
      </form>
      <br />
      <a href='./../flights'>Back to all flights</a>

    </div>


  )
}

module.exports = New;
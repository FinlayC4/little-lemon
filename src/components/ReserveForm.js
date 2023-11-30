import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReserveForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("other");
  const navigate = useNavigate();

  function dateChange(e) {
    e.preventDefault();
    setDate(e.target.value)
    dispatch(e.target.value);
  }

  function timeChange(e) {
    e.preventDefault();
    console.log("Time", e.target.value)
    setTime(e.target.value);
  }

  function guestsChange(e) {
    e.preventDefault();
    setGuests(e.target.value);
  }

  function occasionChange(e) {
    e.preventDefault();
    setOccasion(e.target.value);
  }

  function formSubmit(e) {
    console.log("E");
    e.preventDefault();
    navigate("/reservation-confirmed");
    console.log("E");
  }

  return (
    <>
      <h2 id="reserve-title">Reserve a table</h2>
      <p id="reserve-description">Reserve a table for the Little Lemon restaurant</p>
      <form id="reserve-form" onSubmit={formSubmit}>    
        <div className="datetime-picker input-group">
          <div>
            <label htmlFor="date">Date</label>
            <input onChange={dateChange} required value={date} name="date" className="date-picker" type="date"></input>
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <select name="time" className="time-picker" onChange={timeChange}>
              {availableTimes.map((t) => <option>{t}</option>)}
            </select>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="guests">Number of guests</label>
          <input onChange={guestsChange} required value={guests} name="guests" type="number" placeholder="1" min="1" max="10"></input>
        </div>
        <div className="input-group">
          <label htmlFor="occasion">Occasion</label>
          <select onChange={occasionChange}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option defaultValue={occasion} value="other">Other</option>
          </select>
        </div>
        <input value="Reserve" id="reserve-button" type="submit"></input>
      </form>
    </>
  );
}

export default ReserveForm;
import ReserveForm from "../components/ReserveForm";
import { useReducer } from "react";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function Reservations() {
  function updateTimes(date) {
    //api link returns error 404 (not found) therefore cannot implement
    return times;
  }

  function initialiseTimes() {
    return times;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initialiseTimes());

  return (
    <section id="reserve-section">
      <div id="reserve-container">
        <ReserveForm data-testid="reserve-form" availableTimes={availableTimes} dispatch={dispatch}></ReserveForm>
      </div>
    </section>
  )
}

export default Reservations;
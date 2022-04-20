import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "../../data/contact.json";
import inputSettings from "../../data/input-fields.json";
import InputField from "../admin/InputField";

export default function ReservationForm() {
  const nameSettings = inputSettings.clients.contact.name;
  const emailSettings = inputSettings.clients.contact.email;

  const options = data.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  function onReservation(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onReservation} className="form">
      <p>Make a reservation:</p>
      <InputField settings={nameSettings} />
      <InputField settings={emailSettings} />
      <label className="select">
        Select a time
        <select>
          <option value="">--Select an option--</option>
          {options}
        </select>
      </label>
      <label className="calendar">
        Select a date
        <Calendar calendarType="US" locale="english" minDate={new Date()} />
      </label>
      <button className="label primary">Book a table</button>
    </form>
  );
}

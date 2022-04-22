import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "../../data/contact.json";
import inputSettings from "../../data/input-fields.json";
import InputField from "../admin/InputField";

export default function ReservationForm({ modalHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const nameSettings = inputSettings.clients.contact.name;
  const emailSettings = inputSettings.clients.contact.email;

  const options = data.select.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  function onReservation(event) {
    event.preventDefault();

    if (name === "" || email === "" || time === "") return null;
    modalHandler();
  }

  return (
    <form onSubmit={onReservation} className="form">
      <p>Make a reservation:</p>
      <InputField settings={nameSettings} setter={setName} />
      <InputField settings={emailSettings} setter={setEmail} />
      <label className="select">
        Select a time
        <select required onChange={setTime}>
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

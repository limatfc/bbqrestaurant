import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "../../data/contact.json";

export default function ReservationForm() {
  const options = data.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <form>
      <p>Make a reservation</p>
      <label>
        First and last names
        <input type="text" />
      </label>
      <label>
        Email address
        <input type="text" />
      </label>
      <label>
        Select a time
        <select>
          <option value="">--Select an option--</option>
          {options}
        </select>
      </label>
      <label>
        Select a date
        <Calendar calendarType="US" locale="english" minDate={new Date()} />
      </label>
      <button>Book a table</button>
    </form>
  );
}

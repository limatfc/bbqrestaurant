import ReservationForm from "../../components/client/ReservationForm";
import ownerImage from "../../assets/images/contact.png";

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <label>Opening Hours:</label>
      <ul>
        <li>Mon-Thu: 11:00 - 00:00</li>
        <li>Fri-Sat: 10:00 - 01:00</li>
        <li>Sun: 17:00 - 22:00</li>
      </ul>
      <ReservationForm />
      <label>Address</label>
      <ul>
        <li>Rådmansgatan, 30</li>
        <li>171 45</li>
        <li>Stockholm, Sweden</li>
      </ul>
      <div>
        <iframe
          title="hey"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4602407179061!2d18.062306916100233!3d59.34196491705145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d69b3088473%3A0xd63c90ce42fc344b!2sR%C3%A5dmansgatan%2030%2C%20114%2029%20Stockholm!5e0!3m2!1ssv!2sse!4v1649945530807!5m2!1ssv!2sse"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <label>Who we are:</label>
      <img
        src={ownerImage}
        alt="The owner is the famous actress Jennifer Anniston."
      />
    </div>
  );
}

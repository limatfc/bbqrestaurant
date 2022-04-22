import ReservationForm from "../../components/clients/ReservationForm";
import ownerImage from "../../assets/images/contact.png";
import data from "../../data/contact.json";
import { useNavigate } from "react-router-dom";
import AddressMap from "../../components/clients/AddressMap";
import { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const hours = data.hours.map((item) => <li key={item}>{item}</li>);
  const address = data.address.map((item) => <li key={item}>{item}</li>);

  function modalHandler() {
    setShowModal(!showModal);
  }

  return (
    <div className="contact-wrapper">
      <h2>Contact</h2>
      <label className="span hours">
        Opening Hours:
        <ul>{hours}</ul>
      </label>
      <ReservationForm modalHandler={modalHandler} />
      <Modal state={[showModal, modalHandler]} />
      <label className="span address">
        Address:
        <ul>{address}</ul>
      </label>
      <AddressMap />
      <label className="image-wrapper">
        Who we are:
        <img
          src={ownerImage}
          alt="The owner is the famous actress Jennifer Anniston."
        />
      </label>
      <button onClick={() => navigate("/")} className="label secundary">
        Go to the home page
      </button>
      <hr />
    </div>
  );
}

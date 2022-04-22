import logo from "../../assets/icons/logo.png";
import close from "../../assets/icons/close.png";
import "../../styles/clients/components/ConfirmationMessage.css";

export default function ConfirmationMessage({ modalHandler }) {
  return (
    <div role="dialog" className="modal-wrapper">
      <div className="backdrop" onClick={modalHandler}></div>
      <div className="overlayer">
        <button onClick={modalHandler}>
          <img className="close" src={close} alt="a golden X icon" />
        </button>
        <h3>
          Thank you for your reservation. Someone is already working on your
          request and will be in contact soon.
        </h3>
        <img
          className="logo"
          src={logo}
          alt="a white cowboy hat besides the writing 'Flaming Cowboy"
        />
      </div>
    </div>
  );
}

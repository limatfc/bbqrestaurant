import { createPortal } from "react-dom";
import ConfirmationMessage from "../../components/clients/ConfirmationMessage";

export default function Modal({ state }) {
  const [showModal, modalHandler] = state;

  if (!showModal) return null;

  return (
    <div>
      {createPortal(
        <ConfirmationMessage modalHandler={modalHandler} />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}

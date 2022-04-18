import { useState } from "react";
import AddForm from "../../components/admin/AddForm";
import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";
import { addDocument } from "../../scripts/firebase/setDocument";

export default function AddCategory() {
  const [inputedData, setInputedData] = useState({});
  const [id, setId] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { addCategory } = useDataProvider();

  function confirmHandler() {
    setShowConfirm(!showConfirm);
  }

  function onClickHandler() {
    addDocument("menu", id, inputedData);
    addCategory(id, inputedData);
    navigate("/admin-home");
  }

  return (
    <div>
      Please fill in all the following fields:
      <AddForm
        setInputedData={setInputedData}
        confirmHandler={confirmHandler}
        setId={setId}
      />
      {showConfirm && (
        <div>
          <p>The category you created is: </p>
          <p>Reminder: you cannot change the ID and the URL address later.</p>
          <ul>
            <li>Name: {inputedData.name}</li>
            <li>ID: {id}</li>
            <li>URL address: {inputedData.URLName}</li>
            <li>Description: {inputedData.description}</li>
            <li>imageDescription: {inputedData.imageDescription}</li>
            <li>Image URL: {inputedData.imageURL}</li>
          </ul>
          <p>Are you sure you want to add this new category?</p>
          <button onClick={onClickHandler}>Yes, I am sure</button>
          <button type="button" onClick={() => navigate("/admin-home")}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

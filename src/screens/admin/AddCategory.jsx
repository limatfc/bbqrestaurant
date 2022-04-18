import { useState } from "react";
import AddForm from "../../components/admin/CategoryAddForm";
import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";
import { addDocument } from "../../scripts/firebase/setDocument";

export default function AddCategory() {
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { addCategory } = useDataProvider();

  function confirmAdd() {
    setShowConfirm(!showConfirm);
  }

  function onClickHandler() {
    addDocument("menu", id, data);
    addCategory(id, data);
    navigate("/admin-home");
  }

  return (
    <div>
      Please fill in all the following fields:
      <AddForm setData={setData} confirmAdd={confirmAdd} setId={setId} />
      {showConfirm && (
        <div>
          <p>The category you created is: </p>
          <p>Reminder: you cannot change the ID and the URL address later.</p>
          <ul>
            <li>Name: {data.name}</li>
            <li>ID: {id}</li>
            <li>URL address: {data.URLName}</li>
            <li>Description: {data.description}</li>
            <li>imageDescription: {data.imageDescription}</li>
            <li>Image URL: {data.imageURL}</li>
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

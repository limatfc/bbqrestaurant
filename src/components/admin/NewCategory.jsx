import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";
import { addDocument } from "../../scripts/firebase/setDocument";

export default function NewCategory({ data }) {
  const navigate = useNavigate();
  const { addCategory } = useDataProvider();

  function onAdd() {
    addDocument("menu", data.URLName, data);
    addCategory(data.id, data);
    navigate("/admin-home");
  }

  if (data.length === 0) return null;

  return (
    <div className="new-category">
      <p>The category you created is: </p>
      <p>Reminder: you cannot change the URL address later</p>
      <ul>
        <li>Name: {data.name}</li>
        <li>URL address: {data.URLName}</li>
        <li>Description: {data.description}</li>
        <li>Image Description: {data.imageDescription}</li>
      </ul>
      <img src={data.imageURL} alt={data.imageDescription} />
      <p>Are you sure you want to add this new category?</p>
      <button onClick={onAdd}>Yes, I am sure</button>
      <button type="button" onClick={() => navigate("/admin-home")}>
        Cancel
      </button>
    </div>
  );
}

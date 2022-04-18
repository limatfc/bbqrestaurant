import EditForm from "../../components/admin/EditForm";
import useDataProvider from "../../store/useDataProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditCategory() {
  const [showForm, setShowForm] = useState(false);
  const { categories } = useDataProvider();
  const navigate = useNavigate();
  const { category } = useParams();

  const findCategory = categories.find((item) => item.URLName === category);
  const { name, URLName, description, imageDescription, imageURL, id } =
    findCategory;

  function OpenForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Description: {description}</li>
      <li>imageDescription: {imageDescription}</li>
      <li>Image URL: {imageURL}</li>
      <button onClick={OpenForm}>Edit information</button>
      <button onClick={() => navigate("/admin-home")}>Go back</button>
      {showForm && <EditForm closeForm={closeForm} id={id} URLName={URLName} />}
    </ul>
  );
}

import EditCategory from "../../components/admin/EditCategory";
import useDataProvider from "../../store/useDataProvider";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CategoryInfo() {
  const [showForm, setShowForm] = useState(false);
  const dataContext = useDataProvider();
  const { category } = useParams();
  const { categories } = dataContext;

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
      <li>URLName: {URLName}</li>
      <li>Description: {description}</li>
      <li>imageDescription: {imageDescription}</li>
      <li>Image URL: {imageURL}</li>
      <button onClick={OpenForm}>Edit information</button>
      {showForm && <EditCategory closeForm={closeForm} id={id} />}
    </ul>
  );
}

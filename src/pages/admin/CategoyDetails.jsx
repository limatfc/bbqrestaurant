import { useParams, Link } from "react-router-dom";
import CategoryEditForm from "../../components/admin/CategoryEditForm";
import useDataProvider from "../../store/useDataProvider";
import { useState } from "react";
import Subcategory from "../../components/admin/Subcategory";

export default function CategoryDetails() {
  const { category } = useParams();
  const { categories } = useDataProvider();
  const [showScreen, setShowScreen] = useState(0); //0: show nothing, 1: show form// 2: show products

  const findCategory = categories.find((item) => item.URLName === category);
  const { id, URLName } = findCategory;

  const categoryEditForm = (
    <CategoryEditForm onShowDetails={onShowDetails} data={{ id, URLName }} />
  );

  function onShowDetails() {
    setShowScreen(0);
  }

  function onShowForm() {
    setShowScreen(1);
  }

  function onShowProducts() {
    setShowScreen(2);
  }

  return (
    <div>
      <h3>Category information:</h3>
      <ul>
        <li>Name: {findCategory.name}</li>
        <li>Description: {findCategory.description}</li>
        <li>imageDescription: {findCategory.imageDescription}</li>
      </ul>
      <img src={findCategory.imageURL} alt={findCategory.imageDescription} />
      <button onClick={onShowForm}>Edit category information</button>
      <button onClick={onShowProducts}>
        See all the products under the {findCategory.name} category
      </button>
      <Link to="/admin-home">Go back</Link>
      {showScreen === 1 && categoryEditForm}
      {showScreen === 2 && <Subcategory category={category} />}
    </div>
  );
}

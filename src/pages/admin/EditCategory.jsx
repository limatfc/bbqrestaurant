import { useParams, Link } from "react-router-dom";
import CategoryEditForm from "../../components/admin/CategoryEditForm";
import useDataProvider from "../../store/useDataProvider";
import { useState } from "react";
import CategoryDetails from "../../components/admin/CategoryDetails";

export default function EditCategory() {
  const { category } = useParams();
  const { categories } = useDataProvider();
  const [showScreen, setShowScreen] = useState(0); //0: show nothing, 1: show form// 2: show products

  const findCategory = categories.find((item) => item.URLName === category);
  const { id, URLName } = findCategory;

  const categoryEditForm = (
    <CategoryEditForm setScreen={setScreen} data={{ id, URLName }} />
  );

  function setScreen(number) {
    setShowScreen(number);
  }
  return (
    <div className="category-details">
      <h3>Category information:</h3>
      <ul>
        <li>Name: {findCategory.name}</li>
        <li>Description: {findCategory.description}</li>
        <li>Image Description: {findCategory.imageDescription}</li>
      </ul>
      <img src={findCategory.imageURL} alt={findCategory.imageDescription} />
      <div className="buttons">
        <button className="primary label" onClick={() => setScreen(1)}>
          Edit category information
        </button>
        <button className="primary label" onClick={() => setScreen(2)}>
          See all the products under the {findCategory.name} category
        </button>
        <Link className="secundary label" to="/admin-home">
          Go back
        </Link>
      </div>
      {showScreen === 1 && categoryEditForm}
      {showScreen === 2 && <CategoryDetails category={category} />}
    </div>
  );
}

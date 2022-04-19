import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductEditForm from "../../components/admin/ProductEditForm";
import useDataProvider from "../../store/useDataProvider";

export default function EditProduct() {
  const { category, product } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const { products } = useDataProvider();

  const find = products.find((item) => item.URLName === product);

  const {
    imageDescription,
    imageURL,
    longDescription,
    name,
    price,
    ingredients,
    shortDescription,
  } = find;

  function formHandler() {
    setShowForm(!showForm);
  }
  const ingredient = ingredients.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <h3>Product information:</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Price: {price}</li>
        <li>Product long description: {longDescription}</li>
        <li>Product short description: {shortDescription}</li>
        <li>Image Description: {imageDescription}</li>
        <li>Image URL: {imageURL}</li>
        <li>
          Ingredients: <ul>{ingredient}</ul>
        </li>
      </ul>
      <button onClick={formHandler}>Edit product information</button>
      {showForm && (
        <ProductEditForm
          category={category}
          find={find}
          formHandler={formHandler}
        />
      )}
      <button onClick={() => navigate(`/edit-category/${category}`)}>
        Go back
      </button>
    </div>
  );
}

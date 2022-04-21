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

  function formHandler() {
    setShowForm(!showForm);
  }
  const ingredient = find.ingredients.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <h3>Product information:</h3>
      <ul>
        <li>Name: {find.name}</li>
        <li>Price: {find.price}</li>
        <li>Product long description: {find.longDescription}</li>
        <li>Product short description: {find.shortDescription}</li>
        <li>
          Ingredients: <ul>{ingredient}</ul>
        </li>
        <li>Image Description: {find.imageDescription}</li>
      </ul>
      <img src={find.imageURL} alt={find.imageDescription} />
      <button onClick={formHandler}>Edit product information</button>
      {showForm && (
        <ProductEditForm
          category={category}
          find={find}
          formHandler={formHandler}
        />
      )}
      <button onClick={() => navigate(`/category-details/${category}`)}>
        Go back
      </button>
    </div>
  );
}

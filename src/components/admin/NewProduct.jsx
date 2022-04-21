import { addDocument } from "../../scripts/firebase/setDocument";
import { useParams, useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";

export default function NewProduct({ data, id }) {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useDataProvider();
  if (data.length === 0) return null;

  const ingredient = data.ingredients.map((item) => <li key={item}>{item}</li>);

  function onClickHandler() {
    addDocument(`menu/${category}/content`, id, data);
    addProduct(id, data);
    navigate(`/category-details/${category}`);
  }

  return (
    <div>
      <p>Here are the details of the product you created: </p>
      <p>Reminder: you cannot change the ID and the URL address later.</p>
      <ul>
        <li>Name: {data.name}</li>
        <li>URL address: {data.URLName}</li>
        <li>Image Description: {data.imageDescription}</li>
        <li>Image URL: {data.imageURL}</li>
        <li>
          Ingredients: <ul>{ingredient}</ul>
        </li>
        <li>Long Description: {data.longDescription}</li>
        <li>Price: {data.price}</li>
        <li>Short Description: {data.shortDescription}</li>
      </ul>
      <p>Are you sure you want to add this new category?</p>
      <button onClick={onClickHandler}>Yes, I am sure</button>
      <button onClick={() => navigate(`/category-details/${category}`)}>
        Go back
      </button>
    </div>
  );
}

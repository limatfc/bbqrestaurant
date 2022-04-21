import { useState } from "react";
import InputField from "./InputField";
import { ingredientsHandler } from "../../scripts/logic/ingredientsHandler";
import inputData from "../../data/input-fields.json";
import { Link, useParams } from "react-router-dom";

export default function ProductAddForm({ setData, label }) {
  const { category } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescriptionn] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URLName, setURLName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const info = inputData.admin.product;

  function editIngredients(item) {
    const editedArray = ingredientsHandler(item);
    setIngredients(editedArray);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const inputedData = {
      name,
      price,
      longDescription,
      shortDescription,
      imageDescription,
      imageURL,
      URLName,
      ingredients,
    };
    setData(inputedData);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField settings={info.name} setter={setName} />
      <InputField settings={info.price} setter={setPrice} />
      <InputField settings={info.longText} setter={setLongDescriptionn} />
      <InputField settings={info.shortText} setter={setShortDescription} />
      <InputField settings={info.imgDescription} setter={setImageDescription} />
      <InputField settings={info.imgURL} setter={setImageURL} />
      <InputField settings={info.ingredients} setter={editIngredients} />
      <InputField settings={info.URLName} setter={setURLName} />
      <button type="submit">{label}</button>
      <Link to={`/category-details/${category}`}>Go back</Link>
    </form>
  );
}

import { useState } from "react";
import InputField from "./InputField";
import { ingredientsHandler } from "../../scripts/logic/ingredientsHandler";
import inputData from "../../data/input-fields.json";
import { Link } from "react-router-dom";
import FileInput from "./FileInput";
import { uploadFile } from "../../scripts/firebase/cloudStorage";

export default function ProductAddForm({ setData, variables }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescriptionn] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [file, setFile] = useState("");
  const [URLName, setURLName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const info = inputData.admin.product;

  function editIngredients(item) {
    const editedArray = ingredientsHandler(item);
    setIngredients(editedArray);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    const filePath = `products/${variables.id}.png`;
    const imageURL = await uploadFile(file, filePath);
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
      <FileInput setter={setFile} />
      <InputField settings={info.ingredients} setter={editIngredients} />
      <InputField settings={info.URLName} setter={setURLName} />
      <button type="submit">{variables.label}</button>
      <Link to={`/category-details/${variables.category}`}>Go back</Link>
    </form>
  );
}

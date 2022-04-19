import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField";
import { ingredientsHandler } from "../../scripts/pure-functions/ingredientsHandler";

export default function ProductAddForm({ setData, setId }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setLongDescriptionn] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URLName, setURLName] = useState("");
  const [ingredients, setIngredients] = useState([]);

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
    const id = uuidv4();
    setId(id);
    setData(inputedData);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField label="Name" setter={setName} />
      <InputField label="Price" setter={setPrice} />
      <InputField label="Long Description" setter={setLongDescriptionn} />
      <InputField label="Short Description" setter={setShortDescription} />
      <InputField label="Image Description" setter={setImageDescription} />
      <InputField label="Image URL" setter={setImageURL} />
      <InputField label="Ingredients" setter={editIngredients} />
      <InputField label="URL address" setter={setURLName} />
      <button type="submit">Add new product</button>
    </form>
  );
}

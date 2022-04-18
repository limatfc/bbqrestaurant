import { useState } from "react";
import InputField from "./InputField";
import { editDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";
import { ingredientsHandler } from "../../scripts/pure-functions/ingredientsHandler";

export default function ProductEditForm({ find, category, formHandler }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setlongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [imageDescription, setImageDescription] = useState("");
  const { editProduct } = useDataProvider();
  const { id, URLName } = find;

  function editIngredients(item) {
    const editedArray = ingredientsHandler(item);
    setIngredients(editedArray);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const inputedData = {
      name: name,
      price: price,
      longDescription: longDescription,
      shortDescription: shortDescription,
      imageURL: imageURL,
      imageDescription: imageDescription,
      ingredients: ingredients,
    };
    editDocument(`menu/${category}/content`, id, inputedData);
    editProduct(id, inputedData, URLName);
    formHandler();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField label="Name" setter={setName} />
      <InputField label="Price" setter={setPrice} />
      <InputField label="Ingredients" setter={editIngredients} />
      <InputField
        label="Product long description"
        setter={setlongDescription}
      />
      <InputField
        label="Product short description"
        setter={setShortDescription}
      />
      <InputField label="Image URL" setter={setImageURL} />
      <InputField label="Image description" setter={setImageDescription} />
      <button>Confirm changes</button>
    </form>
  );
}

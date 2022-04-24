import { useState } from "react";
import InputField from "./InputField";
import inputData from "../../data/input-fields.json";
import { editDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";
import { ingredientsHandler } from "../../scripts/logic/ingredientsHandler";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import FileInput from "./FileInput";

export default function ProductEditForm({ find, category, formHandler }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [longDescription, setlongDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [file, setFile] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [imageDescription, setImageDescription] = useState("");
  const { editProduct } = useDataProvider();
  const { id, URLName } = find;
  const info = inputData.admin.product;

  function editIngredients(item) {
    const editedArray = ingredientsHandler(item);
    setIngredients(editedArray);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    const filePath = `products/${id}.png`;
    const imageURL = await uploadFile(file, filePath);
    const inputedData = {
      name: name,
      price: price,
      longDescription: longDescription,
      shortDescription: shortDescription,
      imageURL: imageURL,
      imageDescription: imageDescription,
      ingredients: ingredients,
      URLName: URLName,
    };
    editDocument(`menu/${category}/content`, id, inputedData);
    editProduct(id, inputedData);
    formHandler();
  }

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <InputField settings={info.name} setter={setName} />
      <InputField settings={info.price} setter={setPrice} />
      <InputField settings={info.ingredients} setter={editIngredients} />
      <InputField settings={info.longText} setter={setlongDescription} />
      <InputField settings={info.shortText} setter={setShortDescription} />
      <FileInput setter={setFile} />
      <InputField settings={info.imgDescription} setter={setImageDescription} />
      <button className="primary label">Confirm changes</button>
    </form>
  );
}

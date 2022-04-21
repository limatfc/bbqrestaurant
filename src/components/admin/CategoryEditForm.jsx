import { useState } from "react";
import InputField from "./InputField";
import { editDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";
import fieldData from "../../data/input-fields.json";
import { Link } from "react-router-dom";

export default function CategoryEditForm({ data, onShowDetails }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { editCategory } = useDataProvider();

  const info = fieldData.admin.category;

  function onSubmitHandler(event) {
    event.preventDefault();

    const inputedData = {
      name: name,
      imageURL: imageURL,
      description: description,
      imageDescription: imageDescription,
      URLName: data.URLName,
    };

    editDocument("menu", data.id, inputedData);
    editCategory(data.id, inputedData);
    onShowDetails();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField settings={info.name} setter={setName} />
      <InputField settings={info.description} setter={setDescription} />
      <InputField settings={info.imgDescription} setter={setImageDescription} />
      <InputField settings={info.imgURL} setter={setImageURL} />
      <button type="submit">Confirm changes</button>
      <button type="button" onClick={onShowDetails}>
        Cancel
      </button>
    </form>
  );
}

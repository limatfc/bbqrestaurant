import { useState } from "react";
import InputField from "./InputField";
import { editDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";

export default function CategoryEditForm({ closeForm, id, URLName }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { editCategory } = useDataProvider();

  function onSubmitHandler(event) {
    event.preventDefault();

    const inputedData = {
      name: name,
      imageURL: imageURL,
      description: description,
      imageDescription: imageDescription,
      URLName: URLName,
    };

    editDocument("menu", id, inputedData);
    editCategory(id, inputedData);
    closeForm();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField label="Name" setter={setName} />
      <InputField label="Description" setter={setDescription} />
      <InputField label="Image Description" setter={setImageDescription} />
      <InputField label="Image URL" setter={setImageURL} />
      <button type="submit">Confirm changes</button>
      <button type="button" onClick={closeForm}>
        Cancel
      </button>
    </form>
  );
}

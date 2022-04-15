import { useState } from "react";
import InputField from "./InputField";
import { setDocument } from "../../scripts/firebase/setDocument";

export default function EditCategory({ closeForm, id }) {
  const [name, setName] = useState("");
  const [URLName, setURLName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    const inputedData = {
      name: name,
      URLName: URLName,
      description: description,
      imageDescription: imageDescription,
      imageURL: imageURL,
    };
    //Alter the name of the category to link to the right collection in the database
    setDocument("categories-plus", id, inputedData);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField label="Name" setter={setName} />
      <InputField label="URLName" setter={setURLName} />
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

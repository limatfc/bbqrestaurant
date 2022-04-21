import { useState } from "react";
import InputField from "./InputField";
import { editDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";
import fieldData from "../../data/input-fields.json";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import FileInput from "./FileInput";

export default function CategoryEditForm({ data, onShowDetails }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [file, setFile] = useState("");
  const { editCategory } = useDataProvider();

  const info = fieldData.admin.category;

  async function onSubmitHandler(event) {
    event.preventDefault();

    const filePath = `categories/${data.id}.png`;
    const imageURL = await uploadFile(file, filePath);

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
      <FileInput setter={setFile} />
      <button type="submit">Confirm changes</button>
      <button type="button" onClick={onShowDetails}>
        Cancel
      </button>
    </form>
  );
}

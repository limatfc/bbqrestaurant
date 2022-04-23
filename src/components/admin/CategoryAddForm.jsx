import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import data from "../../data/input-fields.json";
import FileInput from "./FileInput";
import { uploadFile } from "../../scripts/firebase/cloudStorage";

export default function CategoryAddForm({ label, setData }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [URLName, setURLName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [file, setFile] = useState("");
  const info = data.admin.category;

  async function onSubmitHandler(event) {
    event.preventDefault();
    const id = uuidv4();
    const filePath = `categories/${id}.png`;
    const imageURL = await uploadFile(file, filePath);

    const dataObject = {
      name: name,
      description: description,
      imageDescription: imageDescription,
      imageURL: imageURL,
      URLName: URLName,
      id: id,
    };
    setData(dataObject);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField settings={info.name} setter={setName} />
      <InputField settings={info.URLName} setter={setURLName} />
      <InputField settings={info.description} setter={setDescription} />
      <FileInput setter={setFile} />
      <InputField settings={info.imgDescription} setter={setImageDescription} />
      <button type="submit">{label}</button>
      <button type="button" onClick={() => navigate("/admin-home")}>
        Go back
      </button>
    </form>
  );
}

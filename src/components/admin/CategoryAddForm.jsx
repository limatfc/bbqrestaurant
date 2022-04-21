import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import data from "../../data/input-fields.json";

export default function CategoryAddForm({ actions, dataObject }) {
  const { setData, confirmAdd } = actions;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URLName, setURLName] = useState("");

  const info = data.admin.category;

  function onSubmitHandler(event) {
    event.preventDefault();
    const dataObject = {
      name: name,
      description: description,
      imageDescription: imageDescription,
      imageURL: imageURL,
      URLName: URLName,
      id: uuidv4(),
    };
    setData(dataObject);

    confirmAdd(true);
  }

  let label = "";
  Object.keys(dataObject).length === 0
    ? (label = "Add new category")
    : (label = "Edit category");
  console.log(dataObject);
  return (
    <form onSubmit={onSubmitHandler}>
      <InputField settings={info.name} setter={setName} />
      <InputField settings={info.URLName} setter={setURLName} />
      <InputField settings={info.description} setter={setDescription} />
      <InputField settings={info.imgURL} setter={setImageURL} />
      <InputField settings={info.imgDescription} setter={setImageDescription} />
      <button type="submit">{label}</button>
      <button type="button" onClick={() => navigate("/admin-home")}>
        Go back
      </button>
    </form>
  );
}

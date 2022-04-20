import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import data from "../../data/input-fields.json";

export default function CategoryAddForm({ actions }) {
  const { setData, confirmAdd, setId } = actions;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URLName, setURLName] = useState("");

  const get = data.admin.categoryAddForm;

  function onSubmitHandler(event) {
    event.preventDefault();
    setData({
      name: name,
      description: description,
      imageDescription: imageDescription,
      imageURL: imageURL,
      URLName: URLName,
    });
    confirmAdd(true);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField settings={get.name} setter={setName} />
      <InputField settings={get.description} setter={setDescription} />
      <InputField settings={get.imgDescription} setter={setImageDescription} />
      <InputField settings={get.imgURL} setter={setImageURL} />
      <InputField settings={get.id} setter={setId} />
      <InputField settings={get.URLName} setter={setURLName} />
      <button type="button" onClick={() => navigate("/admin-home")}>
        Cancel
      </button>
      <button type="submit">Add new category</button>
    </form>
  );
}

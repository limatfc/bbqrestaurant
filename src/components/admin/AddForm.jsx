import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/admin/InputField";

export default function AddForm({ setInputedData, confirmHandler, setId }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [URLName, setURLName] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    setInputedData({
      name: name,
      description: description,
      imageDescription: imageDescription,
      imageURL: imageURL,
      URLName: URLName,
    });
    confirmHandler(true);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField label="Name" setter={setName} />
      <InputField label="Description" setter={setDescription} />
      <InputField label="Image Description" setter={setImageDescription} />
      <InputField label="Image URL" setter={setImageURL} />
      <InputField label="Id" setter={setId} />
      <InputField label="URL address" setter={setURLName} />
      <button type="button" onClick={() => navigate("/admin-home")}>
        Cancel
      </button>
      <button type="submit">Add new category</button>
    </form>
  );
}

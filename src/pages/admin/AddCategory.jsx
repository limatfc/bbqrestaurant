import { useState } from "react";
import CategoryAddForm from "../../components/admin/CategoryAddForm";

import NewCategory from "../../components/admin/NewCategory";

export default function AddCategory() {
  const [data, setData] = useState([]);

  let label = "";
  data.length === 0 ? (label = "Add new category") : (label = "Edit category");

  return (
    <div className="add-category">
      <h3>Please fill in all the following fields:</h3>
      <CategoryAddForm setData={setData} label={label} />
      <NewCategory data={data} />
    </div>
  );
}

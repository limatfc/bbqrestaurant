import { useState } from "react";
import CategoryAddForm from "../../components/admin/CategoryAddForm";

import NewCategory from "../../components/admin/NewCategory";

export default function AddCategory() {
  const [data, setData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  function confirmAdd() {
    setShowConfirm(!showConfirm);
  }

  return (
    <div>
      <h3>Please fill in all the following fields:</h3>
      <CategoryAddForm actions={{ setData, confirmAdd }} dataObject={data} />
      <NewCategory data={data} />
    </div>
  );
}

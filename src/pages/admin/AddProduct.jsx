import { useState } from "react";

import ProductAddForm from "../../components/admin/ProductAddForm";
import NewProduct from "../../components/admin/NewProduct";

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  return (
    <div>
      <h3>Please fill in all the following fields:</h3>
      <ProductAddForm setData={setData} setId={setId} />
      <NewProduct data={data} id={id} />
    </div>
  );
}

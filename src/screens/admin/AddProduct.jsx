import { useState } from "react";

import ProductAddForm from "../../components/admin/ProductAddForm";
import ProductDetails from "../../components/admin/ProductDetails";

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  return (
    <div>
      <h3>Please fill in all the following fields:</h3>
      <ProductAddForm setData={setData} setId={setId} />
      <ProductDetails data={data} id={id} />
    </div>
  );
}

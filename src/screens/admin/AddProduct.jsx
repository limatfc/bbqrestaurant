import { useState } from "react";

import ProductAddForm from "../../components/admin/ProductAddForm";
import ProductDetail from "../../components/admin/ProductDetails";

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  return (
    <div>
      <h3>Please fill in all the following fields:</h3>
      <ProductAddForm setData={setData} setId={setId} />
      <ProductDetail data={data} id={id} />
    </div>
  );
}

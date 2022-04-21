import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductAddForm from "../../components/admin/ProductAddForm";
import NewProduct from "../../components/admin/NewProduct";

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const idGenerated = uuidv4();
    setId(idGenerated);
  }, []);

  let label = "";
  data.name === undefined
    ? (label = "Add new product")
    : (label = "Edit Product");

  return (
    <div>
      <h3>Please fill in all the following fields:</h3>
      <ProductAddForm setData={setData} label={label} />
      <NewProduct data={data} id={id} />
    </div>
  );
}

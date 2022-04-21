import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import ProductAddForm from "../../components/admin/ProductAddForm";
import NewProduct from "../../components/admin/NewProduct";

export default function AddProduct() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const { category } = useParams();

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
      <ProductAddForm setData={setData} variables={{ label, category, id }} />
      <NewProduct data={data} id={id} category={category} />
    </div>
  );
}

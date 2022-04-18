import CategoryEditForm from "../../components/admin/CategoryEditForm";
import ProductCard from "../../components/admin/ProductCard";
import useDataProvider from "../../store/useDataProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useReadData from "../../hooks/useReadData";
import Loading from "../../screens/clients/Loading";

export default function EditCategory() {
  const { categories, productsHandler, products } = useDataProvider();
  const { category } = useParams();
  const { status } = useReadData(productsHandler, `menu/${category}/content`);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const findCategory = categories.find((item) => item.URLName === category);

  const { name, URLName, description, imageDescription, imageURL, id } =
    findCategory;

  const productCards = products.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  function OpenForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  if (status === 0) return <Loading />;

  return (
    <div>
      <h3>Category information:</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>imageDescription: {imageDescription}</li>
        <li>Image URL: {imageURL}</li>
      </ul>
      {!showForm && (
        <button onClick={OpenForm}>Edit category information</button>
      )}

      {showForm && (
        <CategoryEditForm closeForm={closeForm} id={id} URLName={URLName} />
      )}
      <div>
        Here are all the products registered under the {name} category:
        {productCards}
      </div>
      <button onClick={() => navigate("/admin-home")}>Go back</button>
    </div>
  );
}

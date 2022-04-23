import { Link } from "react-router-dom";
import ProductAdminCard from "./ProductAdminCard";
import useDataProvider from "../../store/useDataProvider";
import useReadData from "../../hooks/useReadData";
import Loading from "../../pages/clients/Loading";
import add from "../../assets/icons/add.png";

export default function CategoryDetails({ category }) {
  const { products, productsHandler } = useDataProvider();
  const { status } = useReadData(productsHandler, `menu/${category}/content`);

  const productCard = products.map((item) => (
    <ProductAdminCard item={item} key={item.id} />
  ));

  if (status === 0) return <Loading />;

  return (
    <div className="subcategory">
      <Link
        className="primary label"
        to={`/category-details/${category}/add-new-product`}
      >
        <img src={add} alt="a plus sign" />
        Add a new product
      </Link>
      {productCard}
      {products.length === 0 && (
        <p>
          Oops, it looks like you don't have products under the {category}{" "}
          category. Try adding a new one.
        </p>
      )}
    </div>
  );
}

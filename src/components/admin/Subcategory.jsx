import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useDataProvider from "../../store/useDataProvider";
import useReadData from "../../hooks/useReadData";
import Loading from "../../pages/clients/Loading";
import add from "../../assets/icons/add.png";

export default function Subcategory({ category }) {
  const { products, productsHandler } = useDataProvider();
  const { status } = useReadData(productsHandler, `menu/${category}/content`);

  const productCard = products.map((item) => (
    <ProductCard item={item} key={item.id} />
  ));

  if (status === 0) return <Loading />;

  return (
    <div>
      <Link to={`/category-details/${category}/add-new-product`}>
        Add a new product
        <img src={add} alt="a plus sign" />
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

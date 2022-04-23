import { Link, useParams } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import ProductCard from "../../components/clients/ProductCard";
import Loading from "./Loading";
import Error from "./Error";

export default function Category() {
  const { category } = useParams();
  const { productsHandler, products, categories } = useDataProvider();
  const { status } = useReadData(productsHandler, `menu/${category}/content`);

  const categoryFind = categories.find((item) => category === item.URLName);

  const productCards = products.map((item, index) => (
    <ProductCard key={item.id} item={item} index={index} />
  ));

  if (status === 0) return <Loading />;
  if (!categoryFind) return <Error />;

  return (
    <div className="category-wrapper">
      <img src={categoryFind.imageURL} alt={categoryFind.imageDescription} />
      <h2>{categoryFind.name}</h2>
      <p>{categoryFind.description}</p>
      <div className="cards-wrapper">{productCards}</div>
      {products.length === 0 && (
        <p>Ops, it looks like there are no products for this category.</p>
      )}
      <Link className="label secundary" to="/menu">
        Go back
      </Link>
      <hr />
    </div>
  );
}

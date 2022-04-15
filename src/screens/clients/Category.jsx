import { Link, useParams } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import ProductCard from "../../components/client/ProductCard";
import Loading from "./Loading";
import Error from "./Error";

export default function Category() {
  const { category } = useParams();
  const dataContext = useDataProvider();
  const { productsHandler, products, categories } = dataContext;
  const { status } = useReadData(productsHandler, `menu/${category}/content`);

  const categoryFind = categories.find((item) => category === item.URLName);

  const productCards = products.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  if (status === 0) return <Loading />;
  if (!categoryFind) return <Error />;

  return (
    <div>
      <h2>{categoryFind.name}</h2>
      <p>{categoryFind.shortDescription}</p>
      <div>{productCards}</div>
      <Link to="/menu">Go back</Link>
    </div>
  );
}

import { Link, useParams } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import Error from "./Error";
import Loading from "./Loading";

export default function Product() {
  const { category, product } = useParams();
  const { productsHandler, products } = useDataProvider();
  const { status } = useReadData(productsHandler, `menu/${category}/content/`);

  const findProduct = products.find((item) => item.URLName === product);

  if (status === 0) return <Loading />;
  if (!findProduct) return <Error />;

  const ingredients = findProduct.ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <div className="product-wrapper">
      <h2>{findProduct.name}</h2>
      <p>{findProduct.longDescription}</p>
      <span className="bold">Ingredients:</span>
      <ul>{ingredients}</ul>
      <img src={findProduct.imageURL} alt={findProduct.imageDescription} />
      <span className="bold product-price">Price: </span>
      <span className="value">{findProduct.price}:-</span>
      <Link className="label secundary" to={`/menu/${category}`}>
        Go back
      </Link>
      <hr />
    </div>
  );
}

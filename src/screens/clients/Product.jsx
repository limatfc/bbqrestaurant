import { useNavigate, useParams } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import Error from "./Error";
import Loading from "./Loading";

export default function Product() {
  const { category, product } = useParams();
  const navigate = useNavigate();
  const dataContext = useDataProvider();
  const { productsHandler, products } = dataContext;
  const { status } = useReadData(productsHandler, `menu/${category}/content/`);

  const findProduct = products.find((item) => item.URLName === product);

  if (status === 0) return <Loading />;
  if (!findProduct) return <Error />;

  const ingredients = findProduct.ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  return (
    <div>
      <h2>{findProduct.name}</h2>
      <p>{findProduct.longDescription}</p>
      <p>Ingredients:</p>
      <ul>{ingredients}</ul>
      <img src={findProduct.imageURL} alt={findProduct.imageDescription} />
      <p>Price: {findProduct.price}</p>
      <button onClick={() => navigate(`/menu/${category}`)}>Go back</button>
    </div>
  );
}

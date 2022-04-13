import { useParams } from "react-router-dom";
import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";

export default function Category() {
  const { category } = useParams();
  const dataContext = useDataProvider();
  const { productsHandler, products } = dataContext;
  const { status } = useReadData(productsHandler, "products/product/chicken");

  console.log(products);

  return <div>Category</div>;
}

import { setDocument } from "../../scripts/firebase/fireStore-test";
import useDataProvider from "../../store/useDataProvider";

export default function AdminHome() {
  const dataContext = useDataProvider();
  const { categories, products } = dataContext;
  console.log(categories, products);

  setDocument();

  return <div></div>;
}

import useReadData from "../../hooks/useReadData";
import useDataProvider from "../../store/useDataProvider";
import CategoryCard from "./CategoryCard";
import Error from "./Error";
import Loading from "./Loading";

export default function Menu() {
  const dataContext = useDataProvider();
  const { categoriesHandler, categories } = dataContext;
  const { status } = useReadData(categoriesHandler, "categories");

  const categoryCards = categories.map((item) => (
    <CategoryCard key={item.id} item={item} />
  ));

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  return (
    <div>
      <h2>Menu</h2>
      <p>
        We offer a "full churrasco experience" which includes continuous
        servings of fire-roasted beef, lamb, pork, chicken, and other meats, as
        well as an extensive buffet, or à la carte service.
      </p>
      <div>{categoryCards}</div>
      <button>Book a table</button>
      <hr />
    </div>
  );
}

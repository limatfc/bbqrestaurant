import { useNavigate } from "react-router-dom";
import useDataProvider from "../../store/useDataProvider";
import CategoryCard from "../../components/clients/CategoryCard";
import Error from "./Error";
import Loading from "./Loading";

export default function Menu({ status }) {
  const { categories } = useDataProvider();
  const navigate = useNavigate();

  const categoryCards = categories.map((item, index) => (
    <CategoryCard key={item.id} item={item} index={index} />
  ));

  function onClickHandler() {
    navigate("/contact");
  }

  if (status === 0) return <Loading />;
  if (status === 2) return <Error />;

  return (
    <div className="menu-wrapper">
      <h2>Menu</h2>
      <p>
        We offer a "full churrasco experience" which includes continuous
        servings of fire-roasted beef, lamb, pork, chicken, and other meats, as
        well as an extensive buffet, or à la carte service.
      </p>
      <div className="all-category-cards">{categoryCards}</div>
      {categories.length === 0 && (
        <p>
          Ops, it looks like there has been a problem getting the categories.
          Please check your connection.
        </p>
      )}
      <button className="label primary" onClick={onClickHandler}>
        Book a table
      </button>
      <hr />
    </div>
  );
}

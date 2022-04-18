import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/admin/CategoryCard";
import add from "../../assets/icons/add.png";
import useDataProvider from "../../store/useDataProvider";

export default function AdminHome() {
  const dataContext = useDataProvider();
  const { categories } = dataContext;
  const navigate = useNavigate();

  const category = categories.map((item) => (
    <CategoryCard item={item} key={item.id} />
  ));

  return (
    <div>
      <h3>
        Here are the categories your website is showing. You can add more
        categories, edit the existing ones, or delete everything
      </h3>
      <button onClick={() => navigate("/add-new-category")}>
        Add a new category
        <img src={add} alt="a plus sign" />
      </button>
      <div>{category}</div>
    </div>
  );
}

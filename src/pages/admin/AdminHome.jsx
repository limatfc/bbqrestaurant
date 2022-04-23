import { useNavigate } from "react-router-dom";
import CategoryAdminCard from "../../components/admin/CategoryAdminCard";
import add from "../../assets/icons/add.png";
import useDataProvider from "../../store/useDataProvider";

export default function AdminHome() {
  const { categories } = useDataProvider();
  const navigate = useNavigate();

  const category = categories.map((item) => (
    <CategoryAdminCard item={item} key={item.id} />
  ));

  return (
    <div className="admin-home">
      <h3>
        Here are the categories your website is showing. You can add more
        categories, edit the existing ones, or delete everything.
      </h3>
      <p>
        To access the products, please click on the edit icon of the category
        the chosen products are registered under.
      </p>
      <button
        className="primary label"
        onClick={() => navigate("/add-new-category")}
      >
        <img src={add} alt="a plus sign" />
        Add a new category
      </button>
      <div>{category}</div>
    </div>
  );
}

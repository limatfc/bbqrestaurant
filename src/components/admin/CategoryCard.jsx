import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.png";

export default function CategoryCard({ item }) {
  const { name, URLName } = item;

  return (
    <section>
      <h3>Category: {name}</h3>
      <Link to={`/edit-category/${URLName}`}>
        <img src={edit} alt="edit icon" />
      </Link>
    </section>
  );
}

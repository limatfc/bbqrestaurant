import { Link, useParams } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";

export default function ProductCard({ item }) {
  const { category } = useParams();
  const { name, URLName } = item;

  return (
    <div>
      <h3>Product: {name}</h3>
      <Link to={`/edit-category/${category}/edit-product/${URLName}`}>
        <img src={edit} alt="edit icon" />
      </Link>
    </div>
  );
}

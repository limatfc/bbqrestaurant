import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";
import { deleteFile } from "../../scripts/firebase/cloudStorage";
import { deleteDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";

export default function CategoryCard({ item }) {
  const { name, URLName, id } = item;
  const { deleteCategory } = useDataProvider();

  function onClickHandler() {
    deleteDocument("menu", id);
    deleteCategory(id);
    deleteFile(`categories/${id}.png`);
  }

  return (
    <section>
      <h3>Category: {name}</h3>
      <Link to={`/category-details/${URLName}`}>
        <img src={edit} alt="edit icon" />
      </Link>
      <button onClick={onClickHandler}>
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </section>
  );
}

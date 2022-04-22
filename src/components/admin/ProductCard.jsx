import { Link, useParams } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";
import { deleteFile } from "../../scripts/firebase/cloudStorage";
import { deleteDocument } from "../../scripts/firebase/setDocument";
import useDataProvider from "../../store/useDataProvider";

export default function ProductCard({ item }) {
  const { category } = useParams();
  const { name, URLName, id } = item;
  const { deleteProduct } = useDataProvider();

  function onClickHandler() {
    deleteDocument(`menu/${category}/content`, id);
    deleteProduct(id);
    deleteFile(`products/${id}.png`);
  }

  return (
    <div>
      <h3>Product: {name}</h3>
      <Link to={`/category-details/${category}/edit-product/${URLName}`}>
        <img src={edit} alt="edit icon" />
      </Link>
      <button onClick={onClickHandler}>
        <img src={deleteIcon} alt="an icon of a bin" />
      </button>
    </div>
  );
}

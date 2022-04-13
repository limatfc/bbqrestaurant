import { useNavigate } from "react-router-dom";

export default function CategoryCard({ item }) {
  const navigate = useNavigate();
  const { description, imageDescription, imageURL, name } = item;

  function onClickHandler() {
    navigate(`/menu/${name}`);
  }

  return (
    <div className="category-card-wrapper">
      <img src={imageURL} alt={imageDescription} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onClickHandler}>View more</button>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function CategoryCard({ item, index }) {
  const { description, imageDescription, imageURL, name, URLName } = item;

  let style = "";
  index % 2 == 0 ? (style = "even") : (style = "odd");

  return (
    <div className={`category-card-wrapper ${style}`}>
      <div>
        <img src={imageURL} alt={imageDescription} />
        <h3>{name}</h3>
      </div>
      <p>{description}</p>
      <Link className="secundary label" to={`/menu/${URLName}`}>
        View more
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function ProductCard({ item, index }) {
  const { imageURL, imageDescription, name, price, shortDescription, URLName } =
    item;

  let style = "";
  index % 2 == 0 ? (style = "even") : (style = "odd");

  return (
    <Link className="link" to={URLName}>
      <section className={`product-card-wrapper ${style}`}>
        <img src={imageURL} alt={imageDescription} />
        <h3>{name}</h3>
        <p className="description">{shortDescription}</p>
        <p className="price">
          <span>Price: </span>
          {price}:-
        </p>
      </section>
    </Link>
  );
}

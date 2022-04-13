export default function CategoryCard({ item }) {
  const { description, imageDescription, imageURL, name } = item;

  return (
    <div className="category-card-wrapper">
      <img src={imageURL} alt={imageDescription} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>View more</button>
    </div>
  );
}

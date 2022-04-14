export default function ProductCard({ item }) {
  const { imageURL, imageDescription, name, price, shortDescription } = item;

  return (
    <section>
      <img src={imageURL} alt={imageDescription} />
      <h3>{name}</h3>
      <p>{shortDescription}</p>
      <p>{price}</p>
    </section>
  );
}

import heroImage from "../../assets/images/hero.jpg";

export default function Home() {
  return (
    <div>
      <img
        className="heroImage"
        src={heroImage}
        alt="a bar, focusing on the shelves containing bottles and glasses"
      />
      <h1>Welcome to Flaming Cowboy</h1>
      <button>Book a table</button>
    </div>
  );
}

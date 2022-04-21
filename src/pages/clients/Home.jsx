import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <img
        className="heroImage"
        src={heroImage}
        alt="a bar, focusing on the shelves containing bottles and glasses"
      />
      <h1>Welcome to Flaming Cowboy</h1>
      <button
        onClick={() => {
          navigate("/contact");
        }}
        className="label primary"
      >
        Book a table
      </button>
    </div>
  );
}

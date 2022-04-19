import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function NavigationBarDesktop() {
  return (
    <section className="desktop">
      <img
        src={logo}
        alt="a white cowboy hat besides the writing 'Flaming Cowboy'"
      />
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </section>
  );
}

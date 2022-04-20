import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function NavigationBarDesktop() {
  return (
    <section className="desktop">
      <img
        src={logo}
        alt="a white cowboy hat besides the writing 'Flaming Cowboy'"
      />
      <div></div>
      <Link className="link" to="/">
        Home
      </Link>
      <hr className="vertical" />
      <Link className="link" to="/menu">
        Menu
      </Link>
      <hr className="vertical" />
      <Link className="link" to="/contact">
        Contact
      </Link>
    </section>
  );
}

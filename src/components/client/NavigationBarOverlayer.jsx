import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import close from "../../assets/icons/close.png";

export default function NavigationBarOverlayer({ toggleSideNav }) {
  return (
    <section>
      <div onClick={toggleSideNav} className="background"></div>
      <div className="expanded-wrapper">
        <button onClick={toggleSideNav}>
          {" "}
          <img src={close} alt="a golden X icon" />
        </button>
        <img
          src={logo}
          alt="a white cowboy hat besides the writing 'Flaming Cowboy'"
        />
        <hr />
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <hr />
        <hr />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </section>
  );
}

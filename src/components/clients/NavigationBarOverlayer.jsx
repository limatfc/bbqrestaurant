import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import close from "../../assets/icons/close.png";

export default function NavigationBarOverlayer({ toggleSideNav }) {
  return (
    <section className="overlayer">
      <div onClick={toggleSideNav} className="background"></div>
      <div className="expanded-wrapper">
        <button onClick={toggleSideNav}>
          <img src={close} alt="a golden X icon" />
        </button>
        <hr />
        <hr />
        <Link className="heading" to="/">
          Home
        </Link>
        <Link className="heading" to="/menu">
          Menu
        </Link>
        <Link className="heading" to="/contact">
          Contact
        </Link>
        <hr />
        <hr />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </section>
  );
}

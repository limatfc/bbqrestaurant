import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import { useNavigate } from "react-router-dom";
import twitter from "../../assets/icons/twitter.png";
import close from "../../assets/icons/close.png";

export default function NavigationBarOverlayer({ toggleSideNav }) {
  const navigate = useNavigate();

  function onNavigate(path) {
    navigate(path);
    toggleSideNav();
  }

  return (
    <section className="overlayer">
      <div onClick={toggleSideNav} className="background"></div>
      <div className="expanded-wrapper">
        <button onClick={toggleSideNav}>
          <img src={close} alt="a golden X icon" />
        </button>
        <hr />
        <hr />
        <button className="heading" onClick={() => onNavigate("/")}>
          Home
        </button>
        <button className="heading" onClick={() => onNavigate("/menu")}>
          Menu
        </button>
        <button className="heading" onClick={() => onNavigate("/contact")}>
          Contact
        </button>
        <hr />
        <hr />
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </section>
  );
}

import logo from "../../assets/icons/logo.png";
import menuIcon from "../../assets/icons/menu.png";

export default function NavigationBarMobile({ toggleSideNav }) {
  return (
    <section className="mobile">
      <img
        src={logo}
        alt="a white cowboy hat besides the writing 'Flaming Cowboy'"
      />
      <button onClick={toggleSideNav}>
        <img src={menuIcon} alt="three horizontal lines stacked" />
      </button>
    </section>
  );
}

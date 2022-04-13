import logo from "../assets/icons/logo.png";
import menuIcon from "../assets/icons/menu.png";

export default function NavigationBar() {
  return (
    <section>
      <img
        src={logo}
        alt="a white cowboy hat besides the writing 'Flaming Cowboy'"
      />
      <img src={menuIcon} alt="three horizontal lines stacked" />
    </section>
  );
}

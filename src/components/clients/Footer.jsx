import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

export default function Footer() {
  return (
    <section className="footer-wrapper">
      <small>Follow us:</small>
      <div>
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
      </div>
    </section>
  );
}

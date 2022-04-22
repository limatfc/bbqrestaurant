import { useState } from "react";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";
import useDataProvider from "../../store/useDataProvider";
import NavigationBarOverlayer from "./NavigationBarOverlayer";

export default function NavigationBar() {
  const { isLoggedIn } = useDataProvider();
  const [showSideNav, setShowSideNav] = useState(false);

  function toggleSideNav() {
    setShowSideNav(!showSideNav);
  }

  let screen = "";
  window.innerWidth < 750 ? (screen = "mobile") : (screen = "desktop");

  if (isLoggedIn) return null;

  return (
    <div className="navigation-bar">
      {screen === "desktop" && <NavigationBarDesktop />}
      {screen === "mobile" && (
        <NavigationBarMobile toggleSideNav={toggleSideNav} />
      )}
      {showSideNav && <NavigationBarOverlayer toggleSideNav={toggleSideNav} />}
    </div>
  );
}

import { useState } from "react";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

import NavigationBarOverlayer from "./NavigationBarOverlayer";

export default function NavigationBar() {
  const [showSideNav, setShowSideNav] = useState(false);

  function toggleSideNav() {
    setShowSideNav(!showSideNav);
  }
  let screen = "";
  window.innerWidth < 750 ? (screen = "mobile") : (screen = "desktop");

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

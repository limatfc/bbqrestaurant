import { useState } from "react";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

import NavigationBarOverlayer from "./NavigationBarOverlayer";

export default function NavigationBar() {
  const [showSideNav, setShowSideNav] = useState(false);

  function toggleSideNav() {
    setShowSideNav(!showSideNav);
  }

  return (
    <div className="navigation-bar">
      <NavigationBarDesktop />
      <NavigationBarMobile toggleSideNav={toggleSideNav} />
      {showSideNav && <NavigationBarOverlayer toggleSideNav={toggleSideNav} />}
    </div>
  );
}

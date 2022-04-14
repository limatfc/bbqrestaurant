import { useState } from "react";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

import NavigationBarMobileExpanded from "./NavigationBarMobileExpanded";

export default function NavigationBar() {
  const [showSideNav, setShowSideNav] = useState(false);

  function toggleSideNav() {
    setShowSideNav(!showSideNav);
  }

  return (
    <div className="navigation-bar">
      <NavigationBarDesktop />
      <NavigationBarMobile toggleSideNav={toggleSideNav} />
      {showSideNav && (
        <NavigationBarMobileExpanded toggleSideNav={toggleSideNav} />
      )}
    </div>
  );
}

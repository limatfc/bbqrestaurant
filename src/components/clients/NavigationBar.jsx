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

  if (isLoggedIn) return null;

  return (
    <div className="navigation-bar">
      <NavigationBarDesktop />
      <NavigationBarMobile toggleSideNav={toggleSideNav} />
      {showSideNav && <NavigationBarOverlayer toggleSideNav={toggleSideNav} />}
    </div>
  );
}

import { useState, useEffect } from "react";
import { SmallNav } from "./smallNav";
import { LargeNav } from "./largeNav";

export function NavBar() {
  function Nav() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 991px)");
      setIsSmallScreen(mediaQuery.matches);

      const handler = (e) => setIsSmallScreen(e.matches);
      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return <div>{isSmallScreen ? <SmallNav /> : <LargeNav />}</div>;
  }

  return <Nav />;
}

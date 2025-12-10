import { useState } from "react";
import { LinksContainer, Hamburger } from "./navItems";
import logo from "../assets/logo.png";

export function SmallNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="nav" role="navigation" aria-label="Main navigation">
      <img src={logo} id="logo_image" alt="VORSAG logo" />
      <p>VORSAG</p>
      <Hamburger
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <LinksContainer
        variant="small"
        isMenuOpen={isMenuOpen}
        onLinkClick={handleLinkClick}
      />
    </nav>
  );
}

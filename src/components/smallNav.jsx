import { LinksContainer, Humburger } from "./navItems";
import "/styles/smallNav.css";
import logo from "/src/assets/logo.png";

export function SmallNav() {
  return (
    <nav id="nav">
      <img src={logo} id="logo_image" alt="logo" />
      <p>VORSAG</p>
      <Humburger />
      <LinksContainer variant="small" />
    </nav>
  );
}

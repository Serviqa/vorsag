import { useState } from "react";
import { LinksContainer, Modal } from "./navItems";
import logo from "../assets/logo.png";

export function LargeNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div id="nav_container">
        <img src={logo} id="logo_image" alt="VORSAG logo" />
        <LinksContainer variant="large" />
        <button
          className="link-item join_btn"
          id="join"
          onClick={() => setIsModalOpen(true)}
          type="button"
          aria-label="Join VORSAG"
        >
          Join
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </nav>
  );
}

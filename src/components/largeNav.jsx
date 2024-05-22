import { LinksContainer, Modal } from "./navItems";
import logo from "/src/assets/logo.png";
import "/styles/navBar.css";

export function LargeNav() {
  function openModal() {
    const modal = document.getElementById("join_modal");
    modal.classList.toggle("hidden");
  }

  return (
    <nav id="nav">
      <div id="nav_container">
        <img src={logo} id="logo_image" alt="logo" />
        <LinksContainer variant={"large"} />
        <button className="link-item join_btn" id="join" onClick={openModal}>
          Join
        </button>
        <Modal />
      </div>
    </nav>
  );
}

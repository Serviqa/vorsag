import PropTypes from "prop-types";

function LinksContainer({ variant }) {
  return (
    <ul
      className={
        variant === "small"
          ? ["hidden", "small-links-container"].join(" ")
          : "large-links-container"
      }
      id="links-container"
    >
      {/* <span className="close hidden" id="humburger_close">
        &times;
      </span> */}
      <li>
        <a href="#home" className="link-item">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="link-item">
          About
        </a>
      </li>
      <li>
        <a href="#events" className="link-item">
          Events
        </a>
      </li>
      <li>
        <a href="#gallery" className="link-item">
          Gallery
        </a>
      </li>
      <li>
        <a href="#contact" className="link-item">
          Contact Us
        </a>
      </li>
      <li>
        <a href="#chapters" className="link-item">
          Chapters
        </a>
      </li>
    </ul>
  );
}

function Humburger() {
  function openHumburgerMenu() {
    const linksContainer = document.getElementById("links-container");
    linksContainer.classList.toggle("hidden");
    // const close = document.getElementById("humburger_close");
    // close.classList.toggle("hidden");
  }

  return (
    <div id="humburger" onClick={openHumburgerMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

const Modal = () => {
  function closeModal() {
    const modal = document.getElementById("join_modal");
    modal.classList.toggle("hidden");
  }

  return (
    <div className="hidden" id="join_modal">
      <div className="modal_content">
        <span className="close" id="modal_close" onClick={closeModal}>
          &times;
        </span>
        <h2>Join Us</h2>
        <a
          href="https://chat.whatsapp.com/KuXbs1HeBH48lwVCzyR19r"
          target="_blank"
        >
          Join Our whatsapp group
        </a>
      </div>
    </div>
  );
};

LinksContainer.propTypes = {
  variant: PropTypes.oneOf(["small", "large"]).isRequired,
};

export { LinksContainer, Humburger, Modal };

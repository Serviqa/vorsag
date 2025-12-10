import { useEffect } from "react";
import PropTypes from "prop-types";

function LinksContainer({ variant, isMenuOpen, onLinkClick }) {
  return (
    <ul
      className={
        variant === "small"
          ? isMenuOpen
            ? "small-links-container"
            : "hidden small-links-container"
          : "large-links-container"
      }
      id="links-container"
    >
      <li>
        <a href="#hero__section" className="link-item" onClick={onLinkClick}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="link-item" onClick={onLinkClick}>
          About
        </a>
      </li>
      <li>
        <a href="#events" className="link-item" onClick={onLinkClick}>
          Events
        </a>
      </li>
      <li>
        <a href="#gallery" className="link-item" onClick={onLinkClick}>
          Gallery
        </a>
      </li>
      <li>
        <a href="#contact" className="link-item" onClick={onLinkClick}>
          Contact Us
        </a>
      </li>
    </ul>
  );
}

function Hamburger({ isMenuOpen, onToggle }) {
  return (
    <button
      id="hamburger"
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
      type="button"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close"
          id="modal_close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
        <h2 id="modal-title">Join Us</h2>
        <a
          href="https://chat.whatsapp.com/KuXbs1HeBH48lwVCzyR19r"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our WhatsApp group
        </a>
      </div>
    </div>
  );
};

LinksContainer.propTypes = {
  variant: PropTypes.oneOf(["small", "large"]).isRequired,
  isMenuOpen: PropTypes.bool,
  onLinkClick: PropTypes.func,
};

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { LinksContainer, Hamburger, Modal };

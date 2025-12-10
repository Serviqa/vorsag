import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

function RenderSocialImages() {
  const socials = [
    {
      name: "facebook",
      src: facebook,
      url: "https://facebook.com/vorsag",
      ariaLabel: "Visit our Facebook page",
    },
    {
      name: "instagram",
      src: instagram,
      url: "https://instagram.com/vorsag",
      ariaLabel: "Visit our Instagram page",
    },
    {
      name: "twitter",
      src: twitter,
      url: "https://twitter.com/vorsag",
      ariaLabel: "Visit our Twitter page",
    },
    {
      name: "linkedin",
      src: linkedin,
      url: "https://linkedin.com/company/vorsag",
      ariaLabel: "Visit our LinkedIn page",
    },
  ];
  return socials.map((social, index) => {
    return (
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.ariaLabel}
        key={index}
      >
        <img
          src={social.src}
          alt={`${social.name} icon`}
          className="social_image"
          id={social.name}
        />
      </a>
    );
  });
}

function RenderLinks() {
  const linksList = [
    { name: "Home", href: "#hero__section" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];
  return linksList.map((link, index) => {
    return (
      <a href={link.href} className="link-item" key={index}>
        {link.name}
      </a>
    );
  });
}

function RenderChapters() {
  const chaptersList = ["UCC", "KNUST", "UG", "UHAS", "GTUC"];
  return chaptersList.map((chapter, index) => {
    return (
      <a href={`#${chapter.toLowerCase()}`} className="link-item" key={index}>
        {chapter}
      </a>
    );
  });
}

function RenderResources() {
  const resourcesList = [
    { name: "Constitution", href: "#" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
    { name: "Contact Us", href: "#contact" },
  ];
  return resourcesList.map((resource, index) => {
    return (
      <a href={resource.href} className="link-item" key={index}>
        {resource.name}
      </a>
    );
  });
}

export default function Footer() {
  return (
    <footer
      className="footer-container"
      id="footer-container"
      role="contentinfo"
    >
      <div className="socials_container">
        <div className="social">
          <img src={logo} alt="VORSAG logo" className="logo" />
          <div className="socials_text">
            <p className="footer-text">
              <span className="vorsag"> VORSAG</span> <br /> ASSOCIATION
            </p>
            <p className="slogan">
              Denyigba! <br /> Our Heritage
            </p>
          </div>
        </div>

        <div className="social_links" aria-label="Social media links">
          <RenderSocialImages />
        </div>
      </div>

      <div className="links__container">
        <div className="links">
          <h3>Links</h3>
          <RenderLinks />
        </div>
        <div className="chapters">
          <h3>Chapters</h3>
          <RenderChapters />
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <RenderResources />
        </div>
      </div>
    </footer>
  );
}

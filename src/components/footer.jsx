import "../../styles/footer.css";
import logo from "../../src/assets/logo.png";
import facebook from "../../src/assets/facebook.svg";
import instagram from "../../src/assets/instagram.svg";
import twitter from "../../src/assets/twitter.svg";
import linkedin from "../../src/assets/linkedin.svg";

function RenderSocialImages() {
  const socials = [
    { name: "facebook", src: facebook },
    { name: "instagram", src: instagram },
    { name: "twitter", src: twitter },
    { name: "linkedin", src: linkedin },
  ];
  return socials.map((social, index) => {
    return (
      <img
        src={social.src}
        alt={social.name}
        className="social_image"
        id={social.name}
        key={index}
      />
    );
  });
}

function RenderLinks() {
  const linksList = [
    "Home",
    "About",
    "Events",
    "Gallery",
    "Chapters",
    "Contact Us",
  ];
  return linksList.map((link, index) => {
    return (
      <a href="#" className="link-item" key={index}>
        {link}
      </a>
    );
  });
}

function RenderChapters() {
  const chaptersList = ["UCC", "KNUST", "UG", "UHAS", "GTUC"];
  return chaptersList.map((chapter, index) => {
    return (
      <a href="#" className="link-item" key={index}>
        {chapter}
      </a>
    );
  });
}

function RenderResources() {
  const resourcesList = ["Constitution", "Gallery", "Events", "Contact Us"];
  return resourcesList.map((resource, index) => {
    return (
      <a href="#" className="link-item" key={index}>
        {resource}
      </a>
    );
  });
}

export default function Footer() {
  return (
    <>
      <div className="footer-container" id="footer-container">
        <div className="socials_container">
          <div className="social">
            <img src={logo} alt="logo" className="logo" />
            <div className="socials_text">
              <p className="footer-text">
                <span className="vorsag"> VORSAG</span> <br /> ASSOCIATION
              </p>
              <p className="slogan">
                Denyigba! <br /> Our Heritage
              </p>
            </div>
          </div>

          <div className="social_links">
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
          <div className="resources"></div>
          <h3>Resources</h3>
          <RenderResources />
        </div>
      </div>
    </>
  );
}

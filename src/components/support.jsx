// import "../../styles/support.css";
import line from "../assets/line.svg";
import togbeAfede from "../assets/Togbe-Afede1.png";
import togbeFiti from "../assets/Togbe-Fiti.jpeg";
import togbeSri from "../assets/Torgbui_sri_III.jpg";

export default function Support() {
  return (
    <section
      className="support"
      id="support"
      aria-label="Support and mission section"
    >
      <div className="partners" id="partners">
        <h2>Our Partners Our Strength</h2>
        <img src={line} alt="Decorative line" className="line" />
        <div className="partners_img" id="partners_img">
          <img src={togbeAfede} alt="Togbe Afedze" loading="lazy" />
          <img src={togbeSri} alt="Togbe Sri" loading="lazy" />
          <img src={togbeFiti} alt="Togbe Fiti" loading="lazy" />
        </div>
        <p>
          VORSAG is actively seeking the support and backing of prestigious and
          prominent figures to help grow and strengthen our association. We are
          reaching out to notable individuals such as Togbe Afedze, Togbe Sri,
          and Togbe Fiti, as well as companies, to join us in our mission. Their
          support will enable us to provide scholarship opportunities and other
          valuable resources to our members. We believe that with the help of
          these esteemed supporters, we can achieve even greater success and
          make a significant impact. Your support can help us reach new heights.
        </p>
      </div>

      <div className="mission_container" id="mission_container">
        <div className="mission" id="mission">
          <div className="mission_message" id="mission_message">
            <h3>Mission</h3>
            <p>
              Our mission is to establish Volta Region as home in the heart of
              every youth both home and abroad for continuous growth and
              stability. Volta is Home
            </p>
          </div>
        </div>

        <div className="vision" id="vision">
          <div className="vision_message" id="vision_message">
            <h3>Vision</h3>
            <p>
              Our vision is to pool out intellectual, spiritual, education and
              material resources towards the development of the region and the
              nation at large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

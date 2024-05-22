import "../../styles/hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero__section" id="hero__section">
        <div className="message" id="message">
          <h1 id="hero__title">
            <span className="white upper">Volta Region</span> <br />
            <span className="green">Students’ Association</span> <br />
            <span className="white lower">of Ghana</span>
          </h1>

          <p id="hero__text">
            We are committed to promoting the welfare of our members and the
            development of the Volta Region. We constitute a coalition of
            student associations spanning multiple university campuses
            throughout Ghana, united by the common goal of fostering a sense of
            unity among our fellow Voltarians. Our overarching mission extends
            beyond mere camaraderie, as we are dedicated to actively
            contributing to the growth and advancement of our cherished region
            through collaborative initiatives and developmental projects.
          </p>
          <input type="button" value="Read More" className="read_more_btn" />
        </div>
      </section>
    </>
  );
}

import "/styles/support.css";
import togbeAfede from "../assets/Togbe-Afede1.png";
import togbeFiti from "../assets/Togbe-Fiti.jpeg";
import togbeSri from "../assets/Torgbui_sri_III.jpg";

function ReadMore() {
  return <button className="read_more_btn">Read more</button>;
}

export default function Support() {
  return (
    <>
      <section className="support" id="support">
        <div className="partners" id="partners">
          <h3>Our Partners Our Strength</h3>
          <div className="partners_img" id="partners_img">
            <img src={togbeAfede} alt="empty" />
            <img src={togbeSri} alt="empty" />
            <img src={togbeFiti} alt="empty" />
          </div>
          <p>
            VORSAG is lucky to have the following prestigious and prominent
            figures that support and bark the association. These prominent
            persons fund the association with scholarship opportunities and many
            more. Not only these prominent figures, also companies like MTN,
            Kabfam, UTV also help support oor humble association. Without these
            people, we wouldn’t be where we are today.
          </p>

          <ReadMore />
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

              <ReadMore />
            </div>
          </div>

          <div className="vision" id="vision">
            <div className="vision_message" id="vision_message">
              <h3>Vision</h3>
              <p>
                Our vission is to pool out intellectual, spiritual, education
                and material resources towards the development of the region ond
                the nation at large.
              </p>

              <ReadMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

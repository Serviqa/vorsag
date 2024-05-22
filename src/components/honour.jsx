import "../../styles/honour.css";
import profile from "../../src/assets/profile-2user.svg";
import gallery from "../../src/assets/gallery.svg";
import video from "../../src/assets/video-time.svg";
import award from "../../src/assets/award.svg";

export default function Honour() {
  return (
    <section className="honor" id="honor">
      <div className="honor_chapters">
        <img src={profile} alt="award image" />
        <h3>Chapters</h3>
        <p>16</p>
      </div>
      <div className="honor_gallery">
        <img src={gallery} alt="gallery image" />
        <h3>Photos</h3>
        <p>249</p>
      </div>
      <div className="honor_event">
        <img src={video} alt="Event Image" />
        <h3>Events</h3>
        <p>14</p>
      </div>
      <div className="honor_award">
        <img src={award} alt="Award image" />
        <h3>Awards</h3>
        <p>7</p>
      </div>
    </section>
  );
}

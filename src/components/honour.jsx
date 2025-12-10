import profile from "../assets/profile-2user.svg";
import gallery from "../assets/gallery.svg";
import video from "../assets/video-time.svg";
import award from "../assets/award.svg";

export default function Honour() {
  return (
    <section className="honor" id="honor" aria-label="VORSAG statistics">
      <div className="honor_chapters">
        <img src={profile} alt="Chapters icon" />
        <h3>Chapters</h3>
        <p>16</p>
      </div>
      <div className="honor_gallery">
        <img src={gallery} alt="Gallery icon" />
        <h3>Photos</h3>
        <p>249</p>
      </div>
      <div className="honor_event">
        <img src={video} alt="Events icon" />
        <h3>Events</h3>
        <p>14</p>
      </div>
      <div className="honor_award">
        <img src={award} alt="Awards icon" />
        <h3>Awards</h3>
        <p>7</p>
      </div>
    </section>
  );
}

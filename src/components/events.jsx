import line from "../assets/line.svg";
import event1 from "../assets/evnt0.jpeg";
import event2 from "../assets/evnt1.jpeg";
import event3 from "../assets/evnt2.jpeg";

export default function Events() {
  return (
    <section className="events" id="events" aria-label="Events section">
      <div className="events_header">
        <h2>Our Events</h2>
        <img src={line} alt="Decorative line" className="line" />
        <h3>Upcoming and Past Events</h3>
      </div>
      <div className="events_container">
        <article className="event_card">
          <img src={event1} alt="8 Days More event" loading="lazy" />
          <h3>8 Days More</h3>
          <p>21st April 2024</p>
          <button type="button" className="event_btn read_more_btn">
            Read More
          </button>
        </article>
        <article className="event_card">
          <img src={event2} alt="Vakpor Volta 2024 event" loading="lazy" />
          <h3>Vakpor Volta 2024</h3>
          <p>21st April 2024</p>
          <button type="button" className="event_btn read_more_btn">
            Read More
          </button>
        </article>
        <article className="event_card">
          <img src={event3} alt="Free AI Training event" loading="lazy" />
          <h3>Free AI Training</h3>
          <p>21st April 2024</p>
          <button type="button" className="event_btn read_more_btn">
            Read More
          </button>
        </article>
      </div>
    </section>
  );
}

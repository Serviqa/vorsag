import "../../styles/events.css";
import line from "../assets/thumb.svg";

export default function Events() {
  return (
    <>
      <section id="events">
        <div className="events_header">
          <h2>Our Events</h2>
          <img src={line} alt="line" />
          <h3>Upcoming and Past Events</h3>
        </div>
        <div className="events_container">
          <div className="event_card">
            <img src={line} alt="event-1" />
            <h3>First General Meeting</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
          <div className="event_card">
            <img src={line} alt="event-2" />
            <h3>Second General Meeting</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
          <div
            className="event_card
                        "
          >
            <img src={line} alt="event-3" />
            <h3>Third General Meeting</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
}

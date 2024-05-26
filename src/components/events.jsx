import "../../styles/events.css";
import line from "../assets/line.svg";
import event1 from "../assets/evnt0.jpeg";
import event2 from "../assets/evnt1.jpeg";
import event3 from "../assets/evnt2.jpeg";

export default function Events() {
  return (
    <>
      <section className="events" id="events">
        <div className="events_header">
          <h2>Our Events</h2>
          <img src={line} alt="event1" />
          <h3>Upcoming and Past Events</h3>
        </div>
        <div className="events_container">
          <div className="event_card">
            <img src={event1} alt="event-1" />
            <h3>8 Days More</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
          <div className="event_card">
            <img src={event2} alt="event-2" />
            <h3>Vakpor Volta 2024</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
          <div className="event_card">
            <img src={event3} alt="event-3" />
            <h3>Free AI Training</h3>
            <p>21st April 2024</p>
            <button className="event_btn read_more_btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
}

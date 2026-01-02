import { useEffect, useState } from "react";
import API from "../api/axios";

export default function EventAdmin() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  const addEvent = async () => {
    await API.post("/events", {
      title,
      description: "Test event",
      eventDate: new Date()
    });
    setTitle("");
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Events</h5>

        <input
          className="form-control mb-2"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="btn btn-primary mb-3" onClick={addEvent}>
          Add Event
        </button>

        <ul className="list-group">
          {events.map((e) => (
            <li key={e._id} className="list-group-item">
              {e.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

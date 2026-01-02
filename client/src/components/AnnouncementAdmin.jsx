import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AnnouncementAdmin() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    const res = await API.get("/announcements");
    setList(res.data);
  };

  const add = async () => {
    await API.post("/announcements", { title, message });
    setTitle("");
    setMessage("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Announcements</h5>

        <input className="form-control mb-2" placeholder="Title"
          value={title} onChange={e => setTitle(e.target.value)} />

        <textarea className="form-control mb-2" placeholder="Message"
          value={message} onChange={e => setMessage(e.target.value)} />

        <button className="btn btn-success mb-3" onClick={add}>
          Add Announcement
        </button>

        <ul className="list-group">
          {list.map(a => (
            <li key={a._id} className="list-group-item">
              <b>{a.title}</b> — {a.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

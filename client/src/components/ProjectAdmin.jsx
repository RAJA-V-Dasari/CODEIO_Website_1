import { useEffect, useState } from "react";
import API from "../api/axios";

export default function ProjectAdmin() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchData = async () => {
    const res = await API.get("/projects");
    setList(res.data);
  };

  const add = async () => {
    await API.post("/projects", { title, description });
    setTitle("");
    setDescription("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Projects</h5>

        <input className="form-control mb-2" placeholder="Title"
          value={title} onChange={e => setTitle(e.target.value)} />

        <textarea className="form-control mb-2" placeholder="Description"
          value={description} onChange={e => setDescription(e.target.value)} />

        <button className="btn btn-warning mb-3" onClick={add}>
          Add Project
        </button>

        <ul className="list-group">
          {list.map(p => (
            <li key={p._id} className="list-group-item">
              <b>{p.title}</b> — {p.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

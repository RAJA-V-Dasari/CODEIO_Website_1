import { useEffect, useState } from "react";
import API from "../api/axios";

export default function TeamAdmin() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const fetchData = async () => {
    const res = await API.get("/team");
    setList(res.data);
  };

  const add = async () => {
    await API.post("/team", { name, role });
    setName("");
    setRole("");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5>Team Members</h5>

        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={e => setName(e.target.value)} />

        <input className="form-control mb-2" placeholder="Role"
          value={role} onChange={e => setRole(e.target.value)} />

        <button className="btn btn-info mb-3" onClick={add}>
          Add Member
        </button>

        <ul className="list-group">
          {list.map(m => (
            <li key={m._id} className="list-group-item">
              {m.name} — {m.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

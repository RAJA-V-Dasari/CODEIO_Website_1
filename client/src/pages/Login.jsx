import { useState } from "react";
import API from "../api/axios";

export default function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/admin/login", {
      email,
      password
    });
    localStorage.setItem("token", res.data.token);
    setIsAuth(true);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="mb-3 text-center">Admin Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-dark w-100" onClick={login}>
        Login
      </button>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>Hello! I'm Sunny ☀️</h1>
      <p>Let's learn feelings using weather</p>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input placeholder="Create a password" type="password" />

      <button onClick={() => navigate("/home")}>
        Let's Get Started 🌈
      </button>
    </div>
  );
}

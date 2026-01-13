import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ParentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // simple demo auth
    if (email === "parent@gmail.com" && password === "parent123") {
      localStorage.setItem("parentLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid parent credentials");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            👨‍👩‍👧 Parent Login
          </h2>

          <input
            type="email"
            placeholder="Parent Email"
            className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-bold"
          >
            Login →
          </button>

          <p className="text-xs text-center mt-4 text-gray-500">
            Demo credentials: <br />
            parent@gmail.com / parent123
          </p>
        </div>
      </div>
    </>
  );
}

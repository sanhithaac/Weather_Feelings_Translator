import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  /* ---------- REGISTER ---------- */
  const handleRegister = () => {
    if (!name || !password) {
      alert("Please fill all fields 🌸");
      return;
    }

    localStorage.setItem("childName", name);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedIn", "true");

    navigate("/checkin");
  };

  /* ---------- LOGIN ---------- */
  const handleLogin = () => {
    const storedName = localStorage.getItem("childName");
    const storedPassword = localStorage.getItem("password");

    if (loginName === storedName && loginPassword === storedPassword) {
      localStorage.setItem("loggedIn", "true");
      navigate("/checkin");
    } else {
      alert("Invalid login details ❌");
    }
  };

  return (

  <>
    <Navbar />

    <div className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-12"></div>
  <div className="min-h-screen bg-pink-50 px-6 py-10">
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP HERO */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-10 text-center mb-14">
          <div className="text-5xl mb-4">😊</div>
          <h1 className="text-3xl font-bold mb-2">
            Hi! I’m your Weather Friend 🌤️
          </h1>
          <p className="text-green-700">
            Let’s start your journey together!
          </p>
        </div>

        {/* TWO COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* NEW ACCOUNT */}
          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">
              🌱 New Account
            </h2>

            <input
              className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-4"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="password"
              className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-6"
              placeholder="Create a secret key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleRegister}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full font-bold"
            >
              Let’s Play →
            </button>
          </div>

          {/* EXISTING USER */}
          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">
              🔑 Existing User
            </h2>

            <input
              className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-4"
              placeholder="Your name"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />

            <input
              type="password"
              className="w-full border-2 border-pink-300 rounded-full px-6 py-3 mb-6"
              placeholder="Your secret key"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-bold"
            >
              Log In →
            </button>
          </div>

        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

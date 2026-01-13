import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ParentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ---------- VALIDATION ---------- */

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@!#$%^&*]).{8,}$/.test(password);

  /* ---------- LOGIN ---------- */

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields 🌸");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email 📧");
      return;
    }

    if (!isStrongPassword(password)) {
      alert(
        "Password must have:\n• 8+ characters\n• Uppercase\n• Lowercase\n• Number\n• Special character (_ @ ! # etc)"
      );
      return;
    }

    localStorage.setItem("parentLoggedIn", "true");
    localStorage.setItem("parentEmail", email);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">

      <div className="w-full max-w-lg">

        {/* 🔙 BACK TO HOME */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-pink-600 font-semibold hover:underline flex items-center gap-2"
        >
          ← Back to Home
        </button>

        {/* LOGIN CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

          <div className="text-5xl mb-4">👨‍👩‍👧</div>

          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            Parent Login
          </h1>

          <p className="text-gray-600 mb-8">
            Access your child’s emotional dashboard 💗
          </p>

          <input
            type="email"
            placeholder="Parent Email"
            className="w-full border-2 border-pink-300 rounded-full px-6 py-4 mb-5 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 border-pink-300 rounded-full px-6 py-4 mb-6 text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full font-bold text-lg transition"
          >
            Login →
          </button>

          <p className="text-xs text-gray-500 mt-6">
            Password must include uppercase, lowercase, number & special character
          </p>
        </div>
      </div>
    </div>
  );
}

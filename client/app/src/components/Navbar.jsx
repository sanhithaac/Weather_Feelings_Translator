import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we are on home/register page
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-white border-b border-pink-200 px-8 py-4 flex justify-between items-center">
      
      {/* LOGO */}
      <div
        className="font-bold text-pink-600 text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        🌸 Weather Feelings
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        
        {/* SHOW FULL MENU ONLY IF NOT HOME */}
        {!isHomePage && (
          <>
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-pink-500"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/checkin")}
              className="text-gray-600 hover:text-pink-500"
            >
              Check-in
            </button>

            <button
              onClick={() => navigate("/weather-details")}
              className="text-gray-600 hover:text-pink-500"
            >
              Weather Details
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-600 hover:text-pink-500"
            >
              Dashboard
            </button>
          </>
        )}

        {/* PARENT LOGIN ALWAYS VISIBLE */}
        <button
          onClick={() => navigate("/parent-login")}
          className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-full font-semibold"
        >
          Parent Login
        </button>
      </div>
    </nav>
  );
}

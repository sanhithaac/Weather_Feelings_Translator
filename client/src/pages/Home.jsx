import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>Welcome Back! 😊</h1>
      <p>How are you feeling today?</p>

      <button onClick={() => navigate("/checkin")}>
        Check My Feelings 🌤️
      </button>
    </div>
  );
}

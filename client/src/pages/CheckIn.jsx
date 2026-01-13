import WeatherCard from "../components/WeatherCard";
import EmotionCard from "../components/EmotionCard";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

export default function CheckIn() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h2>What is the weather today?</h2>

      <div className="row">
        <WeatherCard name="Sunny" emoji="☀️" />
        <WeatherCard name="Rainy" emoji="🌧️" />
        <WeatherCard name="Stormy" emoji="⛈️" />
      </div>

      <h2>How does it make you feel?</h2>

      <div className="row">
        <EmotionCard name="Happy" emoji="😄" />
        <EmotionCard name="Calm" emoji="😌" />
        <EmotionCard name="Scared" emoji="😟" />
      </div>

      <ProgressBar percent={70} />

      <button onClick={() => navigate("/success")}>
        Done ✅
      </button>
    </div>
  );
}

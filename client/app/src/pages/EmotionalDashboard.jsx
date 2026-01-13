import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function EmotionalDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
  const parent = localStorage.getItem("parentLoggedIn");
  if (!parent) {
    navigate("/parent-login");
  }
}, [navigate]);

  const weather = localStorage.getItem("lastWeather");
  const feeling = localStorage.getItem("lastFeeling");
  const childName = localStorage.getItem("childName") || "Your child";

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold text-pink-700 mb-2">
        Emotional Dashboard
      </h1>

      <p className="text-pink-600 mb-10 text-lg">
        A gentle overview of {childName}’s emotional journey 🌸
      </p>

      {/* MAIN SUMMARY */}
      <div className="bg-white rounded-3xl shadow p-10 mb-12 max-w-4xl">
        {weather && feeling ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Today’s Emotional Weather
            </h2>

            <p className="text-xl mb-2">
              Weather: <span className="font-bold text-pink-600">{weather}</span>
            </p>

            <p className="text-xl mb-6">
              Feeling: <span className="font-bold text-pink-600">{feeling}</span>
            </p>

            <p className="text-gray-600 text-lg max-w-2xl">
              This combination shows how your child is understanding and
              expressing emotions through weather metaphors. This is a healthy
              and positive way to communicate feelings 💖
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              No check-in yet today
            </h2>
            <p className="text-gray-600 mb-6">
              Ask your child to complete today’s check-in to see their emotional
              summary here.
            </p>
          </>
        )}
      </div>

      {/* QUICK INSIGHTS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-16">
        <InsightCard
          title="Emotion Awareness"
          desc="Recognizing feelings using familiar weather ideas."
          emoji="🌈"
        />
        <InsightCard
          title="Self Expression"
          desc="Comfortably expressing emotions without pressure."
          emoji="💬"
        />
        <InsightCard
          title="Emotional Safety"
          desc="Creating a calm, non-judgmental space."
          emoji="🫶"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-6">
        <button
          onClick={() => navigate("/checkin")}
          className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-600 transition"
        >
          Go to Check-in
        </button>

        <button
          onClick={() => navigate("/story")}
          className="bg-white border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-100 transition"
        >
          View Story Mode
        </button>
      </div>
    </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */

function InsightCard({ title, desc, emoji }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow text-center">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

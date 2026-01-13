import { useLocation, useNavigate } from "react-router-dom";

const MATCHES = {
  "Sunny-Happy": "Bright sunshine and a joyful heart 🌞 You’re glowing today!",
  "Sunny-Calm": "A peaceful sunny day — warm and relaxed 🌼",
  "Sunny-Excited": "Energy is high like a summer afternoon ⚡",
  "Sunny-Thinking": "Clear skies help you think clearly ☀️",

  "Rainy-Happy": "Dancing in the rain brings quiet joy 🌧️",
  "Rainy-Calm": "Soft rain makes everything slow and peaceful 💙",
  "Rainy-Excited": "Stormy energy with playful feelings 🌈",
  "Rainy-Thinking": "Rain helps deep thoughts flow ☁️",

  "Calm Cloud-Happy": "Gentle skies and gentle smiles 🌸",
  "Calm Cloud-Calm": "Everything feels soft and safe ☁️",
  "Calm Cloud-Excited": "Quiet excitement bubbling inside ✨",
  "Calm Cloud-Thinking": "A dreamy mind wandering peacefully 🌙",

  "Windy-Happy": "Breezy joy lifts your spirit 💨",
  "Windy-Calm": "Cool air helps you breathe easy 🍃",
  "Windy-Excited": "Fast winds and fast thoughts 🚀",
  "Windy-Thinking": "Fresh ideas flowing freely 🌬️",
};

export default function Match() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/checkin");
    return null;
  }

  const { weather, feeling } = state;
  const key = `${weather}-${feeling}`;
  const message = MATCHES[key] || "Every feeling is okay 💛";

  /* ✅ SAVE TO DASHBOARD */
  const saveAndGoToDashboard = () => {
    const todayCheckin = {
      date: new Date().toLocaleDateString(),
      weather,
      feeling,
      message,
    };

    localStorage.setItem("todayCheckin", JSON.stringify(todayCheckin));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full rounded-2xl p-8 shadow text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Your Match 🌈
        </h1>

        <div className="text-xl font-bold mb-2">
          {weather} + {feeling}
        </div>

        <p className="text-green-700 mb-8">{message}</p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/checkin")}
            className="border-2 border-pink-400 text-pink-600 px-6 py-3 rounded-full font-bold"
          >
            Set Again
          </button>

          <button
            onClick={saveAndGoToDashboard}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition"
          >
            Save & View Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
}

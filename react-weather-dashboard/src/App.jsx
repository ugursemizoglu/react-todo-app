import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      );
      const geoJson = await geoRes.json();
      if (!geoJson.results || geoJson.results.length === 0) {
        setError("Şehir bulunamadı.");
        setLoading(false);
        return;
      }
      const { latitude, longitude, name, country } = geoJson.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto&temperature_unit=celsius`
      );
      const weatherJson = await weatherRes.json();

      setWeather({
        city: `${name}, ${country}`,
        current: weatherJson.current_weather,
        hourly: weatherJson.hourly,
      });
    } catch (err) {
      console.error(err);
      setError("API hatası — tekrar dene.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h1>🌤️ Hava Durumu</h1>
      <form onSubmit={getWeather}>
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Şehir gir (örn: Istanbul)" />
        <button type="submit">Ara</button>
      </form>

      {loading && <p>Yükleniyor…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h2>{weather.city}</h2>
          <p>Sıcaklık: {weather.current.temperature}°C</p>
          <p>Rüzgar: {weather.current.windspeed} m/s</p>
          <p>Yön: {weather.current.winddirection}°</p>
        </div>
      )}
    </div>
  );
}

export default App;

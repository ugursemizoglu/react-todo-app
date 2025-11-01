import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setError("");

    try {
      const res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=c6c93a0f`);
      if (res.data.Response === "True") setMovies(res.data.Search);
      else setError("Film bulunamadı.");
    } catch {
      setError("API hatası!");
    }
  };

  return (
    <div className="app">
      <h1>🎬 Film Arama Motoru</h1>
      <form onSubmit={searchMovie}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Film ara..."
        />
        <button type="submit">Ara</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={movie.imdbID}
            className="movie-card"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;

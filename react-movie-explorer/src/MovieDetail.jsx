import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=c6c93a0f`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) return <p>Yükleniyor...</p>;
  if (movie.Response === "False") return <p>Film bulunamadı.</p>;

  return (
    <div style={{ textAlign: "center", padding: 0 }}>
      <Link to="/">⬅️ Geri Dön</Link>
      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
        alt={movie.Title}
        style={{ width: 200, borderRadius: 10 }}
      />
      <p><b>Yıl:</b> {movie.Year}</p>
      <p><b>Tür:</b> {movie.Genre}</p>
      <p><b>Yönetmen:</b> {movie.Director}</p>
      <p><b>IMDB:</b> {movie.imdbRating}</p>
      <p style={{ maxWidth: 500, margin: "10px auto" }}>{movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;

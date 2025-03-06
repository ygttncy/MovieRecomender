import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/movieDetail.scss"; // SCSS dosyasını ekledik

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getMovie();
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {movie.vote_average}
        </p>
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
          className="imdb-btn"
        >
          📽️ IMDb Sayfası
        </a>
      </div>
    </div>
  );
};

export default MovieDetail;

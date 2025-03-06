import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmbdb";
import { Link } from "react-router-dom";
import "../styles/home.scss"; 
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="title">🎬 Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

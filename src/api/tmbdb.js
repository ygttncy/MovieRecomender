import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (type = 'popular') => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

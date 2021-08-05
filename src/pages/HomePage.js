import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../services/moviesApi';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function onFetchTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        if (movies.length === 0) {
          <p>No movies</p>;
        }
        setMovies(movies);
      } catch (error) {
        <p>no match</p>;
      }
    }
    onFetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
}

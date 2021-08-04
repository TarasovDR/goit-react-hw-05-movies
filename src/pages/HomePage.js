import { useState, useEffect } from 'react';
import * as moviesApi from '../services/moviesApi';
import MoviesList from '../components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
}

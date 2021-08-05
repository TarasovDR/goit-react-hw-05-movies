import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchMovies } from '../../services/moviesApi';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar';

export default function MoviesPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.search === '') return;

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!query) return;

    async function onFetchMovies() {
      try {
        setIsLoading(true);
        const moviesQuery = await fetchMovies(query);
        if (moviesQuery.length === 0) {
          toast.error('Oops, no such movie');
          setQuery('');
          setMovies([]);
        }
        setMovies(moviesQuery);
      } catch (error) {
        setError('error');
        <p>no match</p>;
      }
    }
    onFetchMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    if (query === newQuery) return;

    setQuery(newQuery);
    history.push({ ...location, search: `query=${newQuery}` });
  };

  return (
    <>
      {error &&
        toast.error('there are no such pictures!', {
          position: 'top-right',
          autoClose: 3000,
        })}
      {isLoading && <Loader />}
      <Searchbar onSubmit={handleSubmit} />

      {movies && <MoviesList movies={movies} />}
    </>
  );
}

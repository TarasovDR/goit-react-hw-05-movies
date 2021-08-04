import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as moviesApi from '../../services/moviesApi';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Form, Input, FormButton } from './MoviesPage.styled';

export default function MoviesPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    // moviesApi.fetchMovies()
    //   .then(setMovies)
    //   .catch(error => setError(error.message))
    //   .finally(() => setIsLoading(false));
  }, [query]);

  const handleChange = e => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    if (query.trim() === '') {
      toast.warn('no request - no movie=)', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (movies.length === 0) {
      setQuery('');
      setMovies([]);
      setError(null);
    }

    moviesApi
      .fetchMovies({ query, page })
      .then(setMovies)
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));

    setQuery(query);
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // });

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {error &&
        toast.error('there are no such pictures!', {
          position: 'top-right',
          autoClose: 3000,
        })}
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Input
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search movies"
          type="text"
          value={query}
        ></Input>
        <FormButton type="submit">
          <span>Search</span>
        </FormButton>
      </Form>
      {movies && <MoviesList movies={movies} />}
      {movies.length > 20 && <Button onClick={onLoadMore} />}
    </>
  );
}

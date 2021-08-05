import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchMovieInfo } from 'services/moviesApi';
import {
  B,
  Btn,
  H3,
  Li,
  MovieImg,
  MovieInfo,
  MovieWrap,
} from './MovieDetailsPage.styled';
import Loader from 'components/Loader';
const Cast = lazy(() => import('pages/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('pages/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const moviePoster = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function onFetchMovieInfo() {
      try {
        const movie = await fetchMovieInfo(movieId);
        if (movie.length === 0) {
          <p>no movie</p>;
        }
        setMovie(movie);
      } catch (error) {
        <p>no movie</p>;
      }
    }
    onFetchMovieInfo();
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <Btn type="button" onClick={onGoBack}>
        Go back
      </Btn>
      {movie !== null && (
        <MovieWrap>
          <MovieImg
            src={`${moviePoster}${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfo>
            <Li>
              <B>Title:</B>
              <span>{movie.title}</span>
            </Li>
            <Li>
              <B>Release date:</B>
              <span>{movie.release_date}</span>
            </Li>
            <Li>
              <B>Vote average:</B>
              <span>{movie.vote_average}</span>
            </Li>
            <Li>
              <B>Genre:</B>
              <span>
                {movie.genres.map(genre => {
                  return <span key={genre.id}>{genre.name} </span>;
                })}
              </span>
            </Li>
            <Li>
              <B>Overview:</B>
              <span>{movie.overview}</span>
            </Li>
          </MovieInfo>
        </MovieWrap>
      )}
      <hr />

      <H3>Additional Information:</H3>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : '/' },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`} exact>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`} exact>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};

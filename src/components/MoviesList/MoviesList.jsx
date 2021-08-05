import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesGallery, MoviesItem, MoviesImgWrap } from './MoviesList.styled';
import noPoster from '../../images/no-poster.jpg';

export default function MoviesList({ movies }) {
  const moviePoster = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  return (
    <MoviesGallery>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            <MoviesImgWrap>
              {poster_path ? (
                <img src={`${moviePoster}${poster_path}`} alt={title} />
              ) : (
                <img src={noPoster} alt={title} />
              )}
            </MoviesImgWrap>
            {title}
          </Link>
        </MoviesItem>
      ))}
    </MoviesGallery>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

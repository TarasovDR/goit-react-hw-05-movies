// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';
import { MoviesGallery, MoviesItem, MoviesImgWrap } from './MoviesList.styled';
import noPoster from '../../images/no-poster.jpg';

export default function MoviesList({ movies }) {
  // const { url } = useRouteMatch();
  const moviePoster = 'https://image.tmdb.org/t/p/w500';

  return (
    <MoviesGallery>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id}>
          {/* <Link to={`${url}/${id}`}>
            <MoviesImgWrap>
            {poster_path ? <img src={`${moviePoster}${poster_path}`} alt={title}/> : <img src={noPoster} alt={title}/>}
            </MoviesImgWrap>
            {title}
          </Link> */}
          <Link to={`/movies/${id}`}>
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

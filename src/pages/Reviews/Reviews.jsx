import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchMovieReviews } from 'services/moviesApi';
import { B, Li } from './Reviews.styled';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(castList => setReviews(castList));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <B>Author: {review.author}</B>
              <p>{review.content}</p>
            </Li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

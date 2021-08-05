import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '86bd42046114d360999dd0d3bfd670a4';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
  return response.data.results;
};

export const fetchMovieInfo = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  return response.data.results;
};

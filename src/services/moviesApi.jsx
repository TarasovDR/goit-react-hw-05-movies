import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '86bd42046114d360999dd0d3bfd670a4';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};

export const fetchMovies = async ({ query, page }) => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`,
    );
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};

export const fetchMovieInfo = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.log('error');
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.log('error');
  }
};

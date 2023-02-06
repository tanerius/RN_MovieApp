import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'e8803fd650b9dcddeacdf02c96d43030';

// Get popular movies from themoviedb.org
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiURL}/movie/popular?api_key=${apiKey}`);
  return resp.data.results;
};

// Get upcoming movies from themoviedb.org
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiURL}/movie/upcoming?api_key=${apiKey}`);
  return resp.data.results;
};

// Get popular TV Series from themoviedb.org
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiURL}/tv/popular?api_key=${apiKey}`);
  return resp.data.results;
};

// Get popular family movies from themoviedb.org
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiURL}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

export const getMovie = async id => {
  const resp = await axios.get(`${apiURL}/movie/${id}?api_key=${apiKey}`);
  return resp.data;
};

export const search = async (query, type) => {
  const resp = await axios.get(
    `${apiURL}/search/${type}?api_key=${apiKey}&query=${query}`,
  );
  return resp.data.results;
};

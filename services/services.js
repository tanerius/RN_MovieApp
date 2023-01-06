import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'e8803fd650b9dcddeacdf02c96d43030';

// Get popular movies from themoviedb.org
export const getPopularMovies = async () => {
    const resp = await axios.get(
        `${apiURL}/movie/popular?api_key=${apiKey}`
        );
    return resp.data.results;
}

// Get upcoming movies from themoviedb.org
export const getUpcomingMovies = async () => {
    const resp = await axios.get(
        `${apiURL}/movie/upcoming?api_key=${apiKey}`
        );
    return resp.data.results;
}

// Get popular TV Series from themoviedb.org
export const getPopularTv = async () => {
    const resp = await axios.get(
        `${apiURL}/movie/tv?api_key=${apiKey}`
        );
    return resp.data.results;
}
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e8803fd650b9dcddeacdf02c96d43030');
  return resp.data.results;
}

const App = () => {
  const [movie, setMovie] = useState('');

  getPopularMovies().then(movies => {
    setMovie(movies[0]);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Movie Title: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release: {movie.release_date}</Text>
    </View>
  )
}
export default App;
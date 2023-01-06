import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  // Use useEffect() in order to make sure getPopularMovies doesnt 
  // fire in a loop. The second parameter can me set in milliseconds for repeating
  // [] means fire only once
  useEffect(() =>
  {
    getPopularMovies()
    .then(movies => {
      setMovie(movies[0]);
    })
    .catch(err => {
      setError(err);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Movie Title: {movie.original_title}</Text>
      <Text>Language: {movie.original_language}</Text>
      <Text>Release: {movie.release_date}</Text>

      {/* The following statement displays the text only if error exists. */}
      {error && <Text style={{color: 'red'}}>Error on the Server</Text>}
    </View>
  )
}
export default App;
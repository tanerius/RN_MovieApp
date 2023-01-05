import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e8803fd650b9dcddeacdf02c96d43030');
  console.log(JSON.stringify(resp.data.results[0], null, 2));
}

const App = () => {
  getPopularMovies();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default App;
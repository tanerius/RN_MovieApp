import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const Home = () => {
  const [movieImages, setMovieImages] = useState('');
  const [error, setError] = useState(false);

  // Use useEffect() in order to make sure getPopularMovies doesnt
  // fire in a loop. The second parameter can me set in milliseconds for repeating
  // [] means fire only once
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const movieImagesArry = [];
        movies.forEach(element => {
          movieImagesArry.push(
            'https://image.tmdb.org/t/p/w500' + element.poster_path,
          );
        });

        setMovieImages(movieImagesArry);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {})
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SliderBox images={movieImages} />
    </View>
  );
};

export default Home;

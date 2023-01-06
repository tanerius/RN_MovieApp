import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');

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
    //  styles for megamaxs1234/react-native-image-slider-box
    <View style={styles.sliderContainer}>
      <SliderBox
        images={movieImages}
        dotStyle={styles.sliderDotStyle}
        sliderBoxHeight={dimensions.height / 1.5}
        autoplay={true}
        circleLoop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderDotStyle: {
    height: 0,
  },
});

export default Home;

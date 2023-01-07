import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
} from '../../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../List';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const [movieImages, setMovieImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularShows, setpopularShows] = useState('');
  const [familiyMovies, setFamiliyMovies] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
    ]);
  };

  // Use useEffect() in order to make sure getPopularMovies doesnt
  // fire in a loop. The second parameter can me set in milliseconds for repeating
  // [] means fire only once
  useEffect(() => {
    getData()
      .then(([upcomingMovies, popular, tvShows, family]) => {
        const movieImagesArry = [];
        upcomingMovies.forEach(element => {
          movieImagesArry.push(
            'https://image.tmdb.org/t/p/w500' + element.poster_path,
          );
        });
        setMovieImages(movieImagesArry);
        setPopularMovies(popular);
        setpopularShows(tvShows);
        setFamiliyMovies(family);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    //  styles for megamaxs1234/react-native-image-slider-box
    <React.Fragment>
      {loaded ? (
        <ScrollView>
          {movieImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={movieImages}
                dotStyle={styles.sliderDotStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <List title="Popular Movies" content={popularMovies}></List>
            </View>
          )}
          {popularShows && (
            <View style={styles.carousel}>
              <List title="Popular TV Shows" content={popularShows}></List>
            </View>
          )}
          {familiyMovies && (
            <View style={styles.carousel}>
              <List title="Family Movies" content={familiyMovies}></List>
            </View>
          )}
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="#ff0000" />
      )}
    </React.Fragment>
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
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

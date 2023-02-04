import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {getMovie} from '../../services/services';
import StarRating from 'react-native-star-rating-widget';

const placeholderImage = require('../../assets/placeholder.jpg');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
            style={styles.movieImage}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }></Image>
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.movieGenresContainer}>
                {movieDetail.genres.map(genreItem => {
                  return (
                    <Text style={styles.movieGenreItem} key={genreItem.id}>
                      {genreItem.name} ({genreItem.id})
                    </Text>
                  );
                })}
              </View>
            )}
            <StarRating
              onChange={number => {}}
              rating={movieDetail.vote_average / 2}></StarRating>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieGenresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  movieGenreItem: {
    marginRight: 10,
    fontWeight: 'normal',
    marginTop: 20,
  },
});

export default Detail;

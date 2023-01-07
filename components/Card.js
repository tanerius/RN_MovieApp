import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/placeholder.jpg');
const propTypes = {
  item: PropTypes.object,
};
class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.touchableComp}>
        <Image
          style={styles.movieImage}
          source={
            item.poster_path
              ? {
                  uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                }
              : placeholderImage
          }></Image>
        {!item.poster_path && (
          <Text style={styles.movieTitle}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableComp: {
    padding: 5,
    position: 'relative',
    allignItems: 'center',
    height: 200,
  },
  movieImage: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieTitle: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
    top: 10,
  },
});

Card.propTypes = propTypes;

export default Card;

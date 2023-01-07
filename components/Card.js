import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.touchableComp}>
        <Image
          style={styles.movieImage}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
          }}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchableComp: {
    padding: 5,
    position: 'relative',
  },
  movieImage: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default Card;

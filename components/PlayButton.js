import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

const playImage = require('../assets/play.png');

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable style={styles.button}>
        <Image style={styles.playImage} source={playImage}></Image>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  playImage: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  button: {
    alignContent: 'center',
    borderRadius: 5,
    backgroundColor: 'green',
  },
});

export default PlayButton;

import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import PropTypes from 'prop-types';

const playImage = require('../assets/play.png');

const propTypes = {
  handlePress: PropTypes.func,
};

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;

    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
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

PlayButton.propTypes = propTypes;

export default PlayButton;

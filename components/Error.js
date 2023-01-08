import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const propTypes = {
  errText1: PropTypes.string,
  errText2: PropTypes.string,
};

const defaultValues = {
  errText1: 'Oops. Something went wrong!',
  errText2: 'There has been an error in the app. Try restarting.',
};

class Error extends React.PureComponent {
  render() {
    const {errText1, errText2} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errText1}</Text>
        <Text style={styles.text}>{errText2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

Error.propTypes = propTypes;
Error.defaultValues = defaultValues;

export default Error;

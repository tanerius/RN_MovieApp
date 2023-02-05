import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

{
  /* Calling the class navbar so it doesnt conflict with Navigation */
}
class Navbar extends React.PureComponent {
  state = {};
  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={40} color={'#ffff'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Navbar;

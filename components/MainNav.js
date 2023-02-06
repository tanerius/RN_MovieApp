import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navbar from './Navbar';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();

class MainNav extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        {/* Add a details screen */}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
        {/* Add a search screen */}
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={false} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNav;

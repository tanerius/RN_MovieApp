# React Native Movie Listing Application

This application is written in react native just for learning purposes for myself. Any and all feedback is welcome and appreciated. However, I do reserve the discretion to just ignore it too :)

## Pull Requests

Very welcome too if you have some better way of doing things

## Technology

Written using javascript. In the future i plan to expand this to typescript.

## Mandatory fixes 
Here are some fixes which i had to do in order for this to work for me.  
  
When i installed the ```react-native-image-slider-box``` requirement an error came back telling me the following:  
  
```
ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'
```  
  
In order to 'fix' this i did the following: 

1. check if you have installed deprecated-react-native-prop-types package if not run the following command first: ```npm i deprecated-react-native-prop-types```
2. inside node_modules/react-native/index.js replace these functions with the below lines
  
```javascript  
// Deprecated Prop Types
get ColorPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ColorPropType;
},

get EdgeInsetsPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},

get PointPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').PointPropType;
},

get ViewPropTypes(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```
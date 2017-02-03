// Christopher Adams
// 2/1/2017
// Android code:

/***** Import necessry libraries and custom libraries *****/
// Import libraries to help create a component:
import React from 'react';

// Import features of the react-native library:
// Text, AppRegistry, View etc...
import { AppRegistry, View } from 'react-native';

// Import custom user created Header component:
// ./ is the albums directory. If it is a .js file don't need the .js
// for header.js
import Header from './src/components/header';

// Import the album list component:
import AlbumList from './src/components/AlbumList';

/***** Create components: *****/
// Create a function called app for creation of component:
const App = () => (
  // Everything gets wrapped in View tag so we can return single component
  // the View in this case:
  // Pass value inside { } to the header.
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

/***** Render component to the device: *****/
// First arg albums must match name of our project directory.
// Second arg is the first component to render for our application.
AppRegistry.registerComponent('albums', () => App);

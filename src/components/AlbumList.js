/***** Import necessary libraries: *****/
// Import React as well as the Component feature from the library:
import React, { Component } from 'react';

// Imports for react-native:
import { View } from 'react-native';

// Import the user created AlbumDetail component:
import AlbumDetail from './AlbumDetail';

/***** Make component *****/
// This is a class type component:
// We extend Component so we can borrow functionality from this base class.
class AlbumList extends Component {
  // Create initial state of the component:
  // Set the state to an empty array of albums:
  state = { albums: [] };

  // Any time our component is about to be rendered to the device screen
  // the method componentWillMount() will be called:
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }

// Render the albums using map:
renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );
}

  // When you create a class componenet you must used a render
  // method and use it to return some JSX:
  render() {
    console.log(this.state);
    return (
      // Send the renderedAlbums list to the View/screen:
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

/***** Make the component available to other parts of app: *****/
export default AlbumList;

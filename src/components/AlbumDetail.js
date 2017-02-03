/***** Import required libraries *****/
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

// Import the user created Card component:
import Card from './Card';

// Import the user created CardSection component:
import CardSection from './CardSection';

// Import our Button component:
import Button from './Button';

/***** Create the component *****/
// AlbumDetail accepts a album param:
const AlbumDetail = ({ album }) => {
// Destructure elements we need out of the album:
const { title, artist, thumbnail_image, image, url } = album;
const {
  thumbnailStyle,
  headerContentStyle,
  thumbnailContainerStyle,
  headerTextStyle,
  imageStyle
} = styles;


  return (
    // Display title and artist properties:
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
      {/* Pass a prop called onPress to the button */}
      {/* Linking.openURL opens/goes to the specified url link. */}
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

// Styles for AlbumDetail component:
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

// Style for the header text:
  headerTextStyle: {
    fontSize: 18
  },

  // For our thumbnail image:
  thumbnailStyle: {
    height: 50,
    width: 50
  },

  // Container that contains the thumbnail:
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  // Style how image is displayed:
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

/***** Export component so we can use elsewhere: *****/
export default AlbumDetail;

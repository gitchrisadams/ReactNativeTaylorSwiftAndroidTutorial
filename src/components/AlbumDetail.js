/***** Import required libraries *****/
import React from 'react';
import { Text } from 'react-native';

// Import the user created Card component:
import Card from './Card';

// Import the user created CardSection component:
import CardSection from './CardSection';

/***** Create the component *****/
// AlbumDetail accepts a props as a parameter:
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

/***** Export component so we can use elsewhere: *****/
export default AlbumDetail;

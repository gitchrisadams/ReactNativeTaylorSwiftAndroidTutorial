// Import libraries for making a component:
import React from 'react';
import { Text, View } from 'react-native';

/***** Make a component: *****/
// Header accepts a props property object.
// This is a simple functional component and not a class style component:
const Header = (props) => {
  // Apply styles to the component:
  const { textStyle, viewStyle } = styles;

  return (
    // props.headerText is placeholder for props that will be passed in:
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Styles for the component:
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

/***** Make the component available to other parts of app: *****/
// Export the Header component so it is available
// in other areas of our application.
export default Header;

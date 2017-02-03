/***** Import necessary libraries *****/
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/***** Create component *****/
// onPress and children are being passed to Button as a prop arg:
const Button = ({ onPress, children }) => {
  // Destructure our button styles:
  const { buttonStyle, textStyle } = styles;

  return (
      // onPress will call function or action when button pressed:
      // In this case we are using the onPress prop that was passed
      // in to the Button:
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

// Styling for the Button component:
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

/***** Export component so available elsewhere *****/
export default Button;

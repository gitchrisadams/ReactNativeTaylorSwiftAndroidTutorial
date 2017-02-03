/***** Import libraries *****/
import React from 'react';
import { View } from 'react-native';

// Create component:
// Whenever we pass a component in via the props
// paramenter, it will show up as props.children:
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

// Styling:
const styles = {
  containerStyle:{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10

  }
};

// Export so our component can be used elsewhere:
export default Card;

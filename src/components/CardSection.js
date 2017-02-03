/***** Import necessary libraries. *****/
import React from 'react';
import { View } from 'react-native';

/***** Create the component *****/
// Accepts props paramenter which we can use props.children
// to access its children:
const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

// Styling of component:
const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
  }
};

/***** Make component available elsewhere in code *****/
export default CardSection;

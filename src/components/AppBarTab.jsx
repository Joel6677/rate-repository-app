import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  appBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20
  }
});

const AppBarTab = ({ text, route }) => (
  <Link to={route} component={TouchableWithoutFeedback}>
      <Text fontSize="header"
      fontWeight="bold"
      color="header" 
      style={styles.appBarText}
      >
        {text}
      </Text>
  </Link>
);

export default AppBarTab;
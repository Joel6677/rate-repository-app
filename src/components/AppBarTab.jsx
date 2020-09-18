import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  appBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const AppBarTab = ({ text }) => (
  <TouchableWithoutFeedback>
      <Text style={styles.appBarText}>
        {text}
      </Text>
  </TouchableWithoutFeedback>
);

export default AppBarTab;
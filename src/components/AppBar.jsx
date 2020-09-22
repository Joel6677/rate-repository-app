import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground
  }
});

const AppBar = () => {
  return ( 
  <View style={styles.container}>
   <ScrollView horizontal>
   <AppBarTab text='Repositories' route='/'/>
   <AppBarTab text='Sign In' route='/signIn'/>
   </ScrollView>
  </View> 
  );
};

export default AppBar;
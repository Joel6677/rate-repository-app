import React, {useContext} from 'react';
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

import AuthStorageContext from "../contexts/AuthStorageContext";
import { useApolloClient } from '@apollo/client';
import AppBarTab from './AppBarTab';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  signOutButton: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  }
});


const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const { data } = useQuery(GET_AUTHORIZED_USER,
    { fetchPolicy: 'cache-and-network'}
  );

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={'Repositories'} route={'/'} />
        {data && data?.authorizedUser
          ? (<TouchableWithoutFeedback onPress={signOut}>
            <Text 
              style={styles.signOutButton}>
              Sign out
          </Text>
          </TouchableWithoutFeedback>)
          : <AppBarTab text={'Sign in'} route={'/signIn'} />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;



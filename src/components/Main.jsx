// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Route, Switch, Redirect } from 'react-router-native';

// import RepositoryList from './RepositoryList';
// import AppBar from './AppBar';
// import SignIn from './SignIn';
// import theme from '../theme';

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.colors.mainBackground,
//     flexGrow: 1,
//     flexShrink: 1,
//   },
// });

// const Main = () => {
//   return (
//     <View style={styles.container}>
//       <AppBar />
//       <Switch>
//         <Route path="/" exact>
//           <RepositoryList />
//         </Route>
//         <Route path="/sign-in" exact>
//           <SignIn />
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </View>
//   );
// };

// export default Main;






import React from 'react';
import { View } from 'react-native';
import RepositoryList from "./RepositoryList";
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const Main = () => {

  return (
    <View>
      <AppBar />
      <Switch>
        <Route path='/signIn'>
          <View style={theme.container}>
            <SignIn />
          </View>
        </Route>
        <Route path='/'>
          <View style={theme.container}>
            <RepositoryList />
          </View>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;

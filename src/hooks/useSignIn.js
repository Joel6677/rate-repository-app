
// import { useContext } from "react";
// import AuthStorageContext from "../contexts/AuthStorageContext.js";

// import { useMutation, useApolloClient } from '@apollo/react-hooks';
// import { AUTHORIZE } from '../graphql/mutations';

// const useSignIn = () => {
//     const [mutate, result] = useMutation(AUTHORIZE);
//     const authStorage = useContext(AuthStorageContext);
//     const apolloClient = useApolloClient();

//     const signIn = async ({ username, password }) => {
//         const { data } = await mutate({ variables: { credentials: { username, password } } });
//         authStorage.setAccessToken(data.authorize.accessToken);
//         apolloClient.resetStore();
//         return { data };
//     };
//     return [signIn, result];
// };

// export default useSignIn;

import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    await apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};


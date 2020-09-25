
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
    const client = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(AUTHORIZE);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(data.authorize.accessToken);
        client.resetStore();
        return { data };
    };
    return [signIn, result];
};

export default useSignIn;
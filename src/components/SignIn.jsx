import React from 'react';
import * as yup from 'yup';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

import Theme from '../theme';

const initialValues = {
    username: '',
    password: '',
  };


  const styles = StyleSheet.create({
      input: {
        padding: 10,
        margin: 5,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: 'grey',
        color: 'grey'
      },
      submitButton: {
        padding: 10,
        backgroundColor: Theme.colors.primary,
        borderRadius: 3,
        margin: 5,
        textAlign: 'center',
      }
    });

    const validationSchema = yup.object().shape({
        username: yup
          .string()
          .required('Username is required'),
        password: yup
          .string()
          .required('Password is required'),
      });

const SignInForm = ({onSubmit}) => {

    return (
        <View>
            <FormikTextInput
            name="username"
            placeholder="username"
            style={styles.input}
            />
            <FormikTextInput 
            name="password"
            placeholder="password"
            style={styles.input}
            />
            <TouchableWithoutFeedback onPress={onSubmit} >
                <Text style={styles.submitButton}>Sign in</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

const SignIn = () => {

    const onSubmit = values => {
        console.log(values);
    };

  return (

    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>

  );
};

export default SignIn;


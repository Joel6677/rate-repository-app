import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import Button from './Button';
import FormikTextInput from './FormikTextInput';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});


const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput
         name="ownerName"
         placeholder="Owner name" 
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="repositoryName"
          placeholder="Repository name"
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="rating"
          type="number"
          placeholder="Rating"
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="review"
          placeholder="Review"
        />
      </View>
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: ''
  };
  
  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
    review: yup.string().optional()
});

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
    const [createReview] = useCreateReview();
    const history = useHistory();

    const onSubmit = async (values) => {
         const { ownerName, repositoryName, rating, review } = values;
     
        try {

            const { data } = await createReview({
                repositoryName: repositoryName,
                ownerName: ownerName,
                rating: parseInt(rating),
                text: review
              });
            if (data) {

                history.push(`/repositories/${data.createReview.repositoryId}`);

            }

        } catch (e) {
            console.log(e);
        }

};

  return <ReviewContainer onSubmit={onSubmit} />;

};
export default CreateReview;


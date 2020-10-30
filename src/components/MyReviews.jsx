import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { format } from 'date-fns';
import { useQuery } from '@apollo/react-hooks';
import Text from '../components/Text';
import Theme from '../theme';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 5
  },
  reviewText: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    marginRight: 10,
    marginBottom: 10
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
    marginBottom:5,
    marginTop: 5,
    borderColor: Theme.colors.primary
  }
});

const ItemSeparator = () => <View style={styles.separator}/>;


const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color='primary' fontWeight='bold'>{review.rating}</Text>
      </View>
      <View style={styles.reviewText}>
        <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};
const MyReviews = () => {
  const { data } = useQuery(
    GET_AUTHORIZED_USER, 
    { variables: { includeReviews: true }},
    { fetchPolicy: 'cache-and-network' }
    );

    
    const reviews = data?.authorizedUser?.reviews;

    return (
      <FlatList
      data={reviews?.edges ? reviews.edges.map(edge => edge.node) : []}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem = {({ item }) => <ReviewItem review={item} />}
  />);

};
export default MyReviews;


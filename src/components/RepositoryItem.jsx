import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 15,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 8
    }
  });

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
        <Image source={{uri: item.ownerAvatarUrl}} style={styles.avatar}/>
        <Text>
            <Text>Full name: {item.fullName}</Text>;
            {"\n"}
            <Text>Description: {item.description}</Text>;
            {"\n"}
            <Text>Language: {item.language}</Text>
            {"\n"}
            <Text>Stars: {item.stargazersCount}</Text>
            {"\n"}
            <Text>Forks: {item.forksCount}</Text>
            {"\n"}
            <Text>Reviews: {item.reviewCount}</Text>
            {"\n"}
            <Text>Rating: {item.ratingAverage}</Text>
        </Text>
        </View>
    );
};

export default RepositoryItem;
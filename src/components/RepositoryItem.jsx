import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import RepositoryItemCount from './RepositoryItemCount';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    container2: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 8,
        flexDirection: 'row'
    },
    languageContainer: {
        padding: 5,
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 20
    },
    languageText: {
        color: 'white',
        backgroundColor: theme.colors.primary,
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 4,
        marginTop: 10
    },
    countItemsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    textContainer: {
        marginLeft: 30
    },
    ItemContainer: {
        padding: 10
    }

});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
            <View style={styles.ownerAvatarContainer}>
                <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
            </View>
            <View style={styles.textContainer}>
                <Text
                    style={styles.fullNameText}
                    fontWeight="bold"
                    fontSize="subheading"
                >
                    {item.fullName}
                </Text>
            
            <Text
                style={styles.descriptionText}
                color="textSecondary"
            >
                {item.description}
            </Text>
            <View style={styles.languageContainer}>
                <Text
                    style={styles.languageText}
                    fontSize="subheading"
                    fontWeight="bold"
                >
                    {item.language}
                </Text>
            </View>
            </View>
            </View>


            <View style={styles.countItemsContainer}>
                <View style={styles.ItemContainer}>
                <RepositoryItemCount
                    count={item.stargazersCount}
                    text='Stars'
                />
                </View>
                <View style={styles.ItemContainer}>
                <RepositoryItemCount
                    count={item.forksCount}
                    text='Forks'
                />
                </View>
                <View style={styles.ItemContainer}>
                <RepositoryItemCount
                    count={item.reviewCount}
                    text='Reviews'
                />
                </View>
                <View style={styles.ItemContainer}>
                <RepositoryItemCount
                    count={item.ratingAverage}
                    text='Rating'
                />
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
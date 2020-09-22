import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
      text: {
          textAlign: 'center'
      }
});


const RepositoryItemCount = ({ count, text }) => {  

    if (count >= 1000 && Math.abs((count)/1000).toFixed(1) % 1 != 0){
        count = Math.abs((count)/1000).toFixed(1) + 'k';
    } else if (count >= 1000) {
        count = Math.abs((count)/1000).toFixed(0) + 'k';
    }

  return (
    <View>
      <Text style={styles.text} fontSize="subheading" fontWeight="bold">{count}</Text>
      <Text color='textSecondary' >{text}</Text>
    </View>
  );
};

export default RepositoryItemCount;
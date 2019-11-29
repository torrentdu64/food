import React from 'react';
import { View , Text , StyleSheet, Image }  from 'react-native';

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.container} >
      <Image  style={styles.image} source={result.image_url ? {uri: result.image_url} : null} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} starts -- {result.review_count} reviews </Text>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
      width: 250,
      height: 120,
      borderRadius: 4,
      marginBottom: 4
    },
    name:{
      fontWeight: 'bold'

    }
});

export default ResultsDetails;

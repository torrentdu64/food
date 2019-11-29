import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList , Image} from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({navigation}) => {
  const [ result, setResult ] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const promise = await yelp.get(`/${id}`);
    setResult(promise.data);
  };

  useEffect( () => {
    getResult(id);
  },[]);

  if(!result){
    return null;
  }

  return (
      <View>
        <Text>{result.name}</Text>
        <FlatList
          keyExtractor={ (photo) => photo}
          data={result.photos}
          renderItem={ ({item}) => {
              return <Image style={styles.image} source={{uri: item}} />
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 350
  }
})

export default ResultsShowScreen;

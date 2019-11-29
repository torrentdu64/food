import React, { useState } from 'react';
import { View , Text , StyleSheet, ScrollView }  from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
  const [ term, setTerm ] = useState('');
  const [ searchApi , results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter( (result) => {
      return result.price === price
    });
  };

  if(!results.length){
    return null;
  }

  return (
    <View style={{ flex: 1}} >
      <SearchBar term={term} onChange={ newTerm => setTerm(newTerm)} onSubmitTerm={() => searchApi(term)}/>
      {errorMessage ? <Text>Try again</Text> : null}

      <ScrollView >
        <ResultsList
                     results={filterResultsByPrice('$')}
                     title="Hight price"
        />
        <ResultsList  results={filterResultsByPrice('$$')}

                      title="Bit Pricier"
        />
        <ResultsList  results={filterResultsByPrice('$$$')}

                      title="Cheaper"
        />
      </ScrollView >
    </View>
    );
};


const styles = StyleSheet.create({});

export default SearchScreen;

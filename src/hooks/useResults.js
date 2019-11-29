import { useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [ results, setResults ] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');



  const searchApi = async (searchTerm) => {
    try {

      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Auckland',
          categories: ['Thai']
        }
      });

      setResults(res.data.businesses);
    }catch(err){
      setErrorMessage(err);
      console.log(err);
    }
  }

  useEffect(() => {
    searchApi('noodles')
  }, []);

  return [ searchApi , results, errorMessage];
};

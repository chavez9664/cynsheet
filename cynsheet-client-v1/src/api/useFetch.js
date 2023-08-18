import {useState, useEffect} from 'react';
import api from './axiosConfig';
import { formToJSON } from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCharacters = async () =>{

        try {
          const response = await api.get(url).catch(function (error) {
            console.log(formToJSON(error));
            setError(formToJSON(error));
          });
         setData(response.data);
         setIsLoading(false); 
        } catch (error) {
          console.log('erroneous response, data is not set.');
        } 
    }
    
    useEffect(() => {
        getCharacters();
    }, [url])

    return {data, isLoading, error}
}

export default useFetch;

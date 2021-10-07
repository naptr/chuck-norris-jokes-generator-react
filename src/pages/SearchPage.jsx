import { useEffect, useState } from 'react';

import { getJoke } from '../apis/api';
import { useQuery } from '../utils/hooks/useQuery';


export default function SearchPage() {
  const query = useQuery()
  const searchQuery = query.get('about');

  const [jokesFound, setJokesFound] = useState([]);

  const handleGetJoke = () => {
    getJoke.searchJokes(searchQuery)
    .then(data => setJokesFound(data.result))
    .catch(error => console.error(error));
  }

  useEffect(() => handleGetJoke(), []);

  return (
    <>
      {
        // jokesFound.map(joke => { joke.value }</>)
      }
    </>
  );
}
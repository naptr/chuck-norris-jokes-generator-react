import { useEffect, useState } from 'react';

import { getJoke } from '../apis/api';
import ChuckNorrisImageWithText from '../components/ChuckNorrisImageWithText';
import ErrorComponent from '../components/ErrorComponent';
import JokeWrapper from '../components/JokeWrapper';
import Loading from '../components/Loading';
import { useQuery } from '../utils/hooks/useQuery';


export default function SearchPage() {
  const query = useQuery()
  const searchQuery = query.get('context');

  const [jokesFound, setJokesFound] = useState([]);
  const [errorOccured, setErrorOccured] = useState('');

  const [loading, setLoading] = useState(false);

  const handleGetJoke = () => {
    setLoading(true);

    getJoke.searchJokes(searchQuery)
    .then(data => {
      if (data == 'error') {
        setErrorOccured('Error fetching data!');
      } else if (data == 'bad request') {
        setErrorOccured('Bad Request: Query must be between 3 and 120 characters.');
      } else {
        setJokesFound(data.result);
      }
      setLoading(false);
    })
  }

  useEffect(() => handleGetJoke(), []);

  return (
    <div className="w-full h-full flex items-center flex-col pt-2 space-y-6">
      <ChuckNorrisImageWithText text={`Search Text: ${searchQuery}`} />
      <div id="jokes-found-wrapper" className="w-full flex items-center flex-col space-y-4 overflow-auto scrollbar-hide" style={{ maxHeight: 487+'px'}}>
        {
          loading && (
            <Loading>
              Fetching jokes...
            </Loading>
          )
        }
        {
          errorOccured && (
            <ErrorComponent>
              { errorOccured }
            </ErrorComponent>
          )
        }
        {
          jokesFound?.map(joke => (
            <JokeWrapper jokeValue={joke.value} />
          ))
        }
      </div>
    </div>
  );
}
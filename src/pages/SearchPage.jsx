import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getJoke } from '../apis/api';
import { useQuery } from '../utils/hooks/useQuery';
import { toBoolean } from '../utils/utils';


export default function SearchPage() {
  const history = useHistory();
  const query = useQuery();
  const jokeQuery = query.get('joke');

  const handleGetJoke = () => {
    toBoolean(jokeQuery) ? null : history.push(`/search?joke=${history.location.state?.search_jokes}`);

    getJoke.searchJokes(toBoolean(jokeQuery) ? jokeQuery : history.location.state?.search_jokes)
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  useEffect(() => handleGetJoke(), []);

  return (
    <>
      {
        jokeQuery && <h1>{ jokeQuery }</h1>
      }
    </>
  );
}
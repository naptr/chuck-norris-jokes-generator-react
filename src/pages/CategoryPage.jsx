import { useEffect, useState } from "react";
import { useQuery } from "../utils/hooks/useQuery";

import ChuckNorrisImageWithText from "../components/ChuckNorrisImageWithText";

import { getJoke } from "../apis/api";
import JokeWrapper from "../components/JokeWrapper";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import { Button } from "../components/buttons";


export default function CategoryPage() {
  const query = useQuery();
  const categoryQuery = query.get('category');

  const [randomJokeByCategory, setRandomJokeByCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [randomJokeByCategoryError, setRandomJokeByCategoryError] = useState('');

  const getRandomJokeByCategory = category => {
    setLoading(true);

    getJoke.randomJoke.byCategory(category)
    .then(data => {
      if (data == 'error') {
        setRandomJokeByCategoryError('Error fetching data!');
      } else if (data == 'not found') {
        setRandomJokeByCategoryError('Error! No jokes found.');
      } else {
        setRandomJokeByCategory(data);
      }
      setLoading(false);
    })
  }

  useEffect(() => getRandomJokeByCategory(categoryQuery), []);

  return (
    <div className="w-full h-full flex items-center flex-col pt-2 space-y-6">
      <ChuckNorrisImageWithText text={`Category: ${categoryQuery}`} />
      {
        loading ? (
          <Loading>
            Loading fetching joke...
          </Loading>
        ) : randomJokeByCategoryError == '' ? (
          <div className="overflow-auto w-full scrollbar-hide" style={{maxHeight: 303+'px'}}>
            <JokeWrapper jokeValue={randomJokeByCategory.value} />
          </div>
        ) : (
          <ErrorComponent>
            { randomJokeByCategoryError }
          </ErrorComponent>
        )
      }
      <Button onClickFn={() => getRandomJokeByCategory(categoryQuery)}>
        Another!
      </Button>
    </div>
  );
}
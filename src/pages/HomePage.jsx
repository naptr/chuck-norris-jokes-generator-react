import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from '../components/Form';
import JokeWrapper from "../components/JokeWrapper";
import CategorySearchForm from "../components/CategorySearchForm";
import ChuckNorrisImage from "../components/ChuckNorrisImage";
import { Button } from "../components/buttons";

import { getJoke } from "../apis/api";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";



export default function Home() {
  const history = useHistory();

  const [searchJokesQuery, setSearchJokesQuery] = useState('');
  const [currentJoke, setCurrentJoke] = useState(null);
  const [listOfCategories, setListOfCategories] = useState([]);

  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState('');

  const [randomJokeLoading, setRandomJokeLoading] = useState(false);
  const [randomJokeError, setRandomJokeError] = useState('');
  
  // Apis
  const getRandomJoke = () => { // get random joke immediately at homepage
    setRandomJokeLoading(true);

    getJoke.randomJoke.one() 
    .then(data => {
      if (data == 'error') {
        setRandomJokeError('Error fetching data!')
      } else {
        setCurrentJoke(data);
      }
      setRandomJokeLoading(false);
    })
  }

  const getJokesCategories = () => {
    setCategoriesLoading(true);

    getJoke.categories()
    .then(data => {
      if (data == 'error') {
        setCategoriesError('Error fetching categories!')
      } else {
        setListOfCategories(data);
      }
      setCategoriesLoading(false);
    })
  }

  const initialFetch = () => {
    getRandomJoke();
    getJokesCategories();
  }

  // Handlers
  // on change handler
  const handleSearchJokesChange = ev => {
    const { target: { value } } = ev;

    setSearchJokesQuery(value);
  }

  // search button handler
  const handleSearchJokesButton = () => {
    history.push(`/jokes/search?context=${(searchJokesQuery)}`);
  }

  // on submit handler
  const handleSearchJokesSubmit = ev => {
    ev.preventDefault();
    handleSearchJokesButton();
  }

  useEffect(() => initialFetch(), []);

  return (
    <div className="w-full h-full flex flex-col items-center space-y-8">
      <Form
        onSubmitFn={handleSearchJokesSubmit} 
        inputValue={searchJokesQuery} 
        onChangeFn={handleSearchJokesChange}
        inputPlaceholder="Search jokes by text" 
      />
      <div id="random-joke-wrapper" className="flex items-center flex-col justify-start flex-grow space-y-6">
        <ChuckNorrisImage className="w-full" />
        {
          randomJokeLoading ? (
            <Loading>
              Fetching random joke...
            </Loading>
          ) : (
            randomJokeError == '' ? (
              <JokeWrapper jokeValue={currentJoke?.value} />
            ) : (
              <ErrorComponent>
                { randomJokeError }
              </ErrorComponent>
            )
          )
        }
        <Button onClickFn={getRandomJoke}>
          Another!
        </Button>
      </div>
      <CategorySearchForm 
        listOfCategories={listOfCategories} 
        fetchingDataError={categoriesError} 
        fetchingDataLoading={categoriesLoading} 
      />
    </div>
  )
}
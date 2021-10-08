import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from '../components/Form';
import JokeWrapper from "../components/JokeWrapper";
import CategorySearchForm from "../components/CategorySearchForm";
import ChuckNorrisImage from "../components/ChuckNorrisImage";

import { getJoke } from "../apis/api";



export default function Home() {
  const history = useHistory();

  const [currentJoke, setCurrentJoke] = useState(null);
  const [searchJokesQuery, setSearchJokesQuery] = useState('');
  const [listOfCategories, setListOfCategories] = useState([]);
  
  // Apis
  const getRandomJoke = () => { // get random joke immediately at homepage
    getJoke.randomJoke.one() 
    .then(data => setCurrentJoke(data))
    .catch(error => console.error(error));
  }

  const getJokesCategories = () => {
    getJoke.categories()
    .then(data => setListOfCategories(data))
    .catch(error => console.error(error));
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
    history.push(`/jokes/search?about=${(searchJokesQuery)}`);
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
        <ChuckNorrisImage />
        <JokeWrapper buttonClickFn={getRandomJoke} jokeValue={currentJoke?.value} />
      </div>
      {
        listOfCategories && <CategorySearchForm listOfCategories={listOfCategories} />
      }
    </div>
  )
}
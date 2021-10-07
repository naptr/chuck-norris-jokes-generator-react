import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Form from '../components/Form';
import CategorySearchForm from "../components/CategorySearchForm";

import { getJoke } from "../apis/api";



export default function Home() {
  const history = useHistory();
  const [searchJokesQuery, setSearchJokesQuery] = useState('');
  
  // Apis
  const getRandomJoke = () => { // get random joke immediately at homepage
    getJoke.randomJoke.one() 
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  const getJokesCategories = () => {
    getJoke.categories()
    .then(data => console.log(data))
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
    <div className="w-full h-full flex flex-col items-center">
      <Form
        onSubmitFn={handleSearchJokesSubmit} 
        inputValue={searchJokesQuery} 
        onChangeFn={handleSearchJokesChange}
        inputPlaceholder="Search jokes by text" 
      />
      <div id="joke-wrapper" className="flex items-center flex-col justify-center">

      </div>
      <CategorySearchForm />
    </div>
  )
}
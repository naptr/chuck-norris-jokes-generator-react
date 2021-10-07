import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Button } from "../components/buttons";

import { getJoke } from "../apis/api"



export default function Home() {
  const history = useHistory();

  const [searchQueries, setSearchQueries] = useState({
    search_jokes: '',
    jokes_category: ''
  })
  
  // Apis
  const getRandomJoke = () => { // get random joke immediately at homepage
    getJoke.randomJoke.one() 
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  // Handlers
  const handleOnChange = ev => {
    const { name, value } = ev.target; 

    setSearchQueries({
      ...searchQueries,
      [name]: value
    });
  }

  const handleSearchJokesButton = () => {
    history.push(`/search-jokes?about=${(searchQueries.search_jokes).toLowerCase()}`);
  }

  const handleSubmit = ev => {
    ev.preventDefault();

    const { name } = ev.target;

    switch (name) {
      case 'search_jokes_form':
        handleSearchJokesButton();
        break;
      case 'jokes_category_form':
        
        break;
      default:
        throw new Error('Error: none of above choices');
    }
  }


  useEffect(() => getRandomJoke(), []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <form name="search_jokes_form" onSubmit={handleSubmit} className="flex flex-row items-center">
        <input name="search_jokes" type='text' value={searchQueries.search_jokes} onChange={handleOnChange} />
        <Button buttonValue={'Search'}>
          Search
        </Button>
      </form>
      <div id="joke-wrapper" className="flex items-center flex-col justify-center">

      </div>
      <form name="jokes_category_form" onSubmit={handleSubmit} className="flex flex-row items-center">
        <input name="jokes_category" type='text' value={searchQueries.jokes_category} onChange={handleOnChange} />
        <Button buttonValue={'Search'}>
          Search
        </Button>
      </form>
    </div>
  )
}
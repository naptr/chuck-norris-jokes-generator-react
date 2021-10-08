import { useEffect, useState, useMemo, useCallback } from "react";
import { useHistory } from "react-router";

import { SearchButton, ShowCategoriesButton } from "./buttons";


export default function CategorySearchForm({ listOfCategories }) {
  const history = useHistory();

  const [jokesCategoryQuery, setJokesCategoryQuery] = useState('');
  const [showCategoryButtonFocus, setShowCategoryButtonFocus] = useState(false);

  // handlers
  // on change handler
  const handleOnChange = ev => {
    const { target: { value } } = ev;

    setJokesCategoryQuery(value);

    // setCurrentCategoryList(autoCompleteCategorySearch(value));
  }

  // search button handler
  const handleJokesCategoryButton = () => {
    history.push(`/jokes/random?category=${jokesCategoryQuery}`);
  }

  // submit handler
  const handleSubmit = ev => {
    ev.preventDefault();
    handleJokesCategoryButton();
  }

  // handle show categories button clicked
  const handleShowCategories = () => {
    setShowCategoryButtonFocus(!showCategoryButtonFocus);
  }

  // custom functions
  useEffect(() => console.log(listOfCategories), [listOfCategories]);

  return (
    <div className="w-full group relative">
      <div id="list-of-categories" className="w-64 h-24 flex flex-col absolute bottom-11 overflow-scroll">
        {
          listOfCategories?.map((category, idx) => (
            <div key={idx} className="w-full flex items-center justify-center">
              {category}
            </div>
          ))
        }
      </div>
      <form onSubmit={handleSubmit} className="flex flex-row items-center w-full justify-evenly sm:justify-between h-11 relative">
        <div id="input-wrapper" className="h-full relative">
          <input type='text' value={jokesCategoryQuery} onChange={handleOnChange} required placeholder="Search jokes by category" className="placeholder-gray-300` transition-colors duration-300 w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400" />
          <ShowCategoriesButton onClickFn={handleShowCategories} isFocus={showCategoryButtonFocus} />
        </div>
        <SearchButton>
          Search
        </SearchButton>
      </form>
    </div>
  );
}
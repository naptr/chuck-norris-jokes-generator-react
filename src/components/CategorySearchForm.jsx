import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

import { SearchButton, ShowCategoriesButton } from "./buttons";

import { useOutsideClicked } from "../utils/hooks/useOutsideClicked";


export default function CategorySearchForm({ listOfCategories, fetchingDataLoading }) {
  const history = useHistory();

  const [jokesCategoryQuery, setJokesCategoryQuery] = useState('');
  const [showCategoryButtonFocus, setShowCategoryButtonFocus] = useState(false);
  const [listOfCategoriesAppear, setListOfCategoriesAppear] = useState(false);
  const [currentCategoryList, setCurrentCategoryList] = useState([]);

  const categoryListRef = useRef(null);

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

    if (listOfCategoriesAppear) {
      setListOfCategoriesAppear(false);
    } else {
      setListOfCategoriesAppear(true);
    }
  }

  const handleChoiceCategory = ev => {
    const { target: { innerText: query } } = ev;

    setJokesCategoryQuery(query);
    // console.log(ev.target.innerText);
    handleShowCategories();
  }

  // custom functions
  useOutsideClicked(categoryListRef, setListOfCategoriesAppear);

  useEffect(() => listOfCategories.length > 0 && setCurrentCategoryList(listOfCategories), [listOfCategories]);

  return (
    <div className="w-full group relative" ref={categoryListRef}>
      <div id="list-of-categories" className={`w-64 border-2 rounded-md border-gray-200 flex flex-col items-center justify-center absolute bottom-11 transform transition-all duration-500 ${listOfCategoriesAppear ? 'translate-y-0 opacity-100 h-52' : 'translate-y-11 opacity-0 h-0'}`}>
        {
          fetchingDataLoading && <h1 className="font-semibold text-gray-300">Loading Jokes Categories</h1>
        }
        {
          listOfCategories?.length > 0 && (
            <div className="h-full w-full flex flex-col overflow-y-scroll scrollbar-hide">
              {
                currentCategoryList?.map((category, idx) => (
                  <button key={idx} className="w-full flex items-center justify-start font-bold hover:bg-gray-200 px-4 py-2" onClick={handleChoiceCategory}>
                    {category}
                  </button>
                ))
              }
            </div>
          )
        }
      </div>
      <form onSubmit={handleSubmit} className="flex flex-row items-center w-full justify-evenly sm:justify-between h-11 relative">
        <div id="input-wrapper" className="h-full relative">
          <input type='text' value={jokesCategoryQuery} onClickCapture={() => setListOfCategoriesAppear(true)} onChange={handleOnChange} required placeholder="Search jokes by category" className="placeholder-gray-300` transition-colors duration-300 w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400" />
          <ShowCategoriesButton onClickFn={handleShowCategories} />
        </div>
        <SearchButton>
          Search
        </SearchButton>
      </form>
    </div>
  );
}
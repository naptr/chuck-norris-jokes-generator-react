import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

import { SearchButton, ShowCategoriesButton } from "./buttons";

import { useOutsideClicked } from "../utils/hooks/useOutsideClicked";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";


export default function CategorySearchForm({ listOfCategories, fetchingDataLoading, fetchingDataError }) {
  const history = useHistory();

  const [jokesCategoryQuery, setJokesCategoryQuery] = useState('');
  const [showCategoryButtonFocus, setShowCategoryButtonFocus] = useState(false);
  const [listOfCategoriesAppear, setListOfCategoriesAppear] = useState(false);
  const [currentCategoriesList, setCurrentCategoriesList] = useState([]);

  const categoryListWrapperRef = useRef(null);
  const categoryRef = useRef(null);

  // handlers
  // on change handler
  const handleOnChange = ev => {
    const { target: { value } } = ev;

    setJokesCategoryQuery(value);

    fetchingDataError != '' ? null : autoCompleteCategorySearch(value);
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
    handleShowCategories();
  }

  // custom functions
  const autoCompleteCategorySearch = text => {  // function for autocompleting user typing in searching category/ ies
    const newArray = [];  // empty array for storing filtered list of categories

    listOfCategories.forEach(category => {  // using fetched categories data
      if (text.length == 0 || text.charCodeAt(1) == 32) { // if user typing text length is equal to 0 or when user typing text is space (' ') return void (nothing)
        return
      } else if (text.length >= 1 && category.toLowerCase().includes(text.toLowerCase())) { // else if user typing text is more than or equal to one and the category is includes user typing text then push the typed category or anything that equal to it to the empty array
        newArray.push(category);
      }
    })

    // function behavior
    if (text.length == 0 || text.charCodeAt(1) == 32) { // if user doesn't type anything yet make current category list using fetched categories data
      setCurrentCategoriesList(listOfCategories);
    } else {  // else replace current categories list with new array from above conditional
      setCurrentCategoriesList(newArray);
    }
  }

  
  useOutsideClicked(categoryListWrapperRef, setListOfCategoriesAppear); // custom hooks for getting user click outside category component to make it disappear
  useEffect(() => listOfCategories?.length > 0 && setCurrentCategoriesList(listOfCategories), [listOfCategories]);

  return (
    <div className="w-full group relative" ref={categoryListWrapperRef}>
      <div id="list-of-categories" className={`w-64 border-2 rounded-md border-gray-200 flex flex-col items-center justify-center absolute bottom-11 transform transition-all duration-300 bg-white ${listOfCategoriesAppear ? 'translate-y-0 visible opacity-100 max-h-52' : 'translate-y-11 h-0 invisible opacity-0'}`}>
        {
          (fetchingDataError != '' || fetchingDataLoading ) &&
          <div className="w-full h-52 flex items-center justify-center">
            {
              fetchingDataLoading ? <Loading>Loading Jokes Categories...</Loading> : fetchingDataError != '' ? <ErrorComponent>{ fetchingDataError }</ErrorComponent> : null
            }
          </div>
        }
        {
          listOfCategories?.length > 0 && (
            <div className="h-full w-full flex flex-col overflow-y-scroll scrollbar-hide">
              {
                currentCategoriesList.length > 0 ? currentCategoriesList?.map((category, idx) => (
                  <button key={idx} ref={categoryRef} className="w-full flex items-center justify-start font-bold hover:bg-gray-200 px-4 py-2" onClick={handleChoiceCategory} >
                    {category}
                  </button>
                )) : (
                  <span className="flex px-4 py-2 w-full items-center justify-start text-gray-400 font-semibold">
                    No matching categories
                  </span>
                )
              }
            </div>
          )
        }
      </div>
      <form onSubmit={handleSubmit} className="flex flex-row items-center w-full justify-between h-11 relative">
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
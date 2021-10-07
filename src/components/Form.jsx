import { SearchButton } from "./buttons";


export default function Form({ onSubmitFn, inputValue, onChangeFn, inputPlaceholder }) {

  return (
    <>
      <form onSubmit={onSubmitFn} className="flex flex-row items-center w-full justify-evenly sm:justify-between h-11">
        <input type='text' value={inputValue} onChange={onChangeFn} required placeholder={inputPlaceholder} className="placeholder-gray-300` transition-colors duration-300 w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400" />
        <SearchButton>
          Search
        </SearchButton>
      </form>
    </>
  );
}
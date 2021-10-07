import { SearchButton } from "./buttons";


export default function Form({ onSubmitFn, inputValue, onChangeFn, inputPlaceholder }) {

  return (
    <>
      <form onSubmit={onSubmitFn} className="flex flex-row items-center w-full justify-evenly md:justify-evenly h-11">
        <input type='text' value={inputValue} onChange={onChangeFn} required placeholder={inputPlaceholder} className="w-64 h-full px-3 py-2 bg-blue-50" />
        <SearchButton buttonValue={'Search'}>
          Search
        </SearchButton>
      </form>
    </>
  );
}
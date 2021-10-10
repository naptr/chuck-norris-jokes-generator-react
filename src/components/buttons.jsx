import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Button({ onClickFn, children }) { // reusable button component for global usage
  return (
    <button className="flex items-center justify-center bg-yellow-700 min-w-max px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold" onClick={onClickFn}>
      { children }
    </button>
  )
}

export function SearchButton() {  // reusable button component for searching usage, used inside form with onSubmit attribute
  return (
    <input type="submit" value="Search!" className="cursor-pointer flex items-center justify-center bg-yellow-700 w-24 px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold"/>
  )
}

export const BackButton = ({ isAppear }) => {
  
  return (
    <Link to='/' className={`transition-all duration-200 h-full w-16 flex items-center justify-center absolute left-0 ${isAppear ? 'visible cursor-pointer' : 'invisible cursor-default'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="#B45309" />
      </svg>
    </Link>
  );
}

export const ShowCategoriesButton = ({ onClickFn }) => { // button used for appearing categories, using outside function
  const [isFocus, setIsFocus] = useState(false);

  const handleButtonClicked = () => {
    setIsFocus(!isFocus);
    onClickFn();
  }

  return (
    <button type="button" onClick={handleButtonClicked} className={`h-full w-11 flex items-center justify-center absolute top-0 right-0 active:appearance-none ${isFocus ? 'rotate-180 rounded-full ' : ''}transform transition-transform duration-200`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
      </svg>
    </button>
  );
}
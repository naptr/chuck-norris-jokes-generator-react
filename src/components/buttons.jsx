import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export function Button({ buttonValue }) {
  return (
    <input type="submit" value={buttonValue} className="flex items-center justify-center bg-yellow-800 px-3 py-2 rounded shadow-md text-white"/>
  )
}

export const BackButton = () => {
  return (
    <Link to='/' className="transition-colors duration-300 h-full w-14 flex items-center justify-center bg-yellow-100 absolute left-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="#B45309" />
      </svg>
    </Link>
  );
}
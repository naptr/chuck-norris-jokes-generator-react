import { Link } from 'react-router-dom';


export function Button({ onClickFn, children }) {
  return (
    <button className="flex items-center justify-center bg-yellow-700 w-24 px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold" onClick={onClickFn}>
      { children }
    </button>
  )
}

export function SearchButton() {
  return (
    <input type="submit" value="Search!" className="flex items-center justify-center bg-yellow-700 w-24 px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold"/>
  )
}

export const BackButton = ({ isAppear }) => {
  
  return (
    <Link to='/' className={`transition-all duration-200 h-full w-16 flex items-center justify-center absolute left-0 ${isAppear ? 'opacity-100' : 'opacity-0'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="#B45309" />
      </svg>
    </Link>
  );
}
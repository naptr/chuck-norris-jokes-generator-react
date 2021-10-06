import { useLocation } from 'react-router-dom';

import { BackButton } from "./buttons";


export default function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full h-14 bg-yellow-50 shadow-md items-stretch order-first fixed">
      <div className="w-full h-full flex items-center justify-center flex-row px-4">
        {
          pathname != '/' && <BackButton />
        }
        <h1 className="text-3xl md:text-4xl font-bold font-sans text-yellow-700">CHUCK NORRIS</h1>
      </div>
    </nav>
  );
}
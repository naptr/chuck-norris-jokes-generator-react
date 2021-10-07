import { useLocation } from 'react-router-dom';

import { BackButton } from "./buttons";


export default function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full h-16 bg-yellow-50 shadow-md absolute items-stretch flex justify-center">
      <div className="h-full flex items-center justify-center md:justify-center flex-row w-full max-w-4xl relative">
        <BackButton isAppear={pathname != '/'} />
        <h1 className="text-2xl font-chuck-norris text-yellow-700">CHUCK NORRIS</h1>
      </div>
    </nav>
  );
}
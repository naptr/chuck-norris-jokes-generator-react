import { useHistory } from "react-router";

import { Button } from "../components/buttons";


export default function NotFoundPage() {
  const history = useHistory();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex-grow flex items-center justify-center flex-row space-x-4 text-gray-400">
        <span className="text-4xl">404 </span>
        <span className="block h-10 w-0.5 bg-gray-400"></span>
        <span> Page Not Found</span>
      </div>
      <div className="h-11 w-full flex items-center justify-center">
        <Button onClickFn={() => history.push('/')}>
          Back to Home Page
        </Button>
      </div>
    </div>
  );
}
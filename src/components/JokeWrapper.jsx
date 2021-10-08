import { Button } from '../components/buttons';


export default function JokeWrapper({ buttonClickFn, jokeValue }) {
  return (
    <div className="flex items-center flex-col justify-start space-y-6">
      <p className="font-semibold italic text-center">"{ jokeValue }"</p>
    </div>
  );
}
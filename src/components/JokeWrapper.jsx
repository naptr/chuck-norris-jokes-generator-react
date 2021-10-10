export default function JokeWrapper({ jokeValue }) {
  return (
    <div className="flex items-center flex-col justify-start space-y-6">
      <p className="font-semibold italic text-center">"{ jokeValue }"</p>
    </div>
  );
}
import ChuckNorrisImage from "./ChuckNorrisImage";

export default function ChuckNorrisImageWithText({ text }) {
  return (
    <div className="w-full flex items-center flex-col justify-center space-y-4 font-semibold text-yellow-700">
      <ChuckNorrisImage />
      <span>{ text }</span>
    </div>
  );
}
export default function ErrorComponent({ children }) {
  return (
    <h1 className="font-semibold text-red-700">
      { children }
    </h1>
  );
}
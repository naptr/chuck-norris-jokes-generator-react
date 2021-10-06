import { useEffect } from "react";
import { useParams } from "react-router";
import { getJoke } from "../apis/api";


export default function CategoryPage() {
  const params = useParams();

  const getJokesByCategory = category => {
    getJoke.randomJoke.byCategory(category)
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  useEffect(() => getJokesByCategory(params?.category), []);

  return (
    <>
      Category Page
    </>
  );
}
import { useState } from "react";
import { useHistory } from "react-router";

import Form from "./Form";


export default function CategorySearchForm() {
  const history = useHistory();
  const [jokesCategoryQuery, setJokesCategoryQuery] = useState('');

  // handlers
  // on change handler
  const handleOnChange = ev => {
    const { target: { value } } = ev;

    setJokesCategoryQuery(value);
  }

  // search button handler
  const handleJokesCategoryButton = () => {
    history.push(`/jokes/random?category=${jokesCategoryQuery}`);
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    handleJokesCategoryButton();
  }

  return (
    <div className="w-full">
      <Form
        onSubmitFn={handleSubmit}
        inputValue={jokesCategoryQuery}
        onChangeFn={handleOnChange}
        inputPlaceholder="Search jokes by category"
      />
    </div>
  );
}
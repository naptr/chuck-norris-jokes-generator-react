const API_URL = 'https://api.chucknorris.io/jokes';

// reusable data fetching function
const api = async (url, config) => { 
  try {
    const response = await fetch(url, config);
    // response conditional return
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      return 'bad request';
    } else if (response.status == 404) {
      return 'not found';
    }
  } catch (error) { // mainly used for server error
    return 'error';
  }
}

export const getJoke = {
  randomJoke: {
    one: () => api(`${API_URL}/random`), // fetching one random joke
    byCategory: category => api(`${API_URL}/random?category=${category}`) // fetching one random joke by category
  },
  categories: () => api(`${API_URL}/categories`), // fetching jokes categories
  searchJokes: query => api(`${API_URL}/search?query=${query}`) // searching jokes using given query/ ies
}
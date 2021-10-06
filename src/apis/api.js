const API_URL = 'https://api.chucknorris.io/jokes';

const api = async (url, config) => {
  try {
    const response = await fetch(url, config);
    if (response.status == 200) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export const getJoke = {
  randomJoke: {
    one: () => api(`${API_URL}/random`),
    byCategory: category => api(`${API_URL}/random?category=${category}`)
  },
  jokeCategories: () => api(`${API_URL}/categories`),
  searchJokes: query => api(`${API_URL}/search?query=${query}`)
}
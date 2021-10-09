const API_URL = 'https://api.chucknorris.io/jokes';

const api = async (url, config) => {
  try {
    const response = await fetch(url, config);
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      return 'bad request';
    } else if (response.status == 404) {
      return 'not found';
    }
  } catch (error) {
    return 'error';
  }
}

export const getJoke = {
  randomJoke: {
    one: () => api(`${API_URL}/random`),
    byCategory: category => api(`${API_URL}/random?category=${category}`)
  },
  categories: () => api(`${API_URL}/categories`),
  searchJokes: query => api(`${API_URL}/search?query=${query}`)
}
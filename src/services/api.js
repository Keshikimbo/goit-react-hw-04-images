export function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29186456-7097278d4e7000ffc71d3402d';

  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Sorry, but ${query} is not found`));
  });
}

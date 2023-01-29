import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = '31381187-b432f12d58670729bf0a21c9a';

export const fetchImages = async (querry, page) => {
  return await axios.get(`https://pixabay.com/api/?key=31381187-b432f12d58670729bf0a21c9a&per_page=12&q=${querry}&page=${page}`);
};
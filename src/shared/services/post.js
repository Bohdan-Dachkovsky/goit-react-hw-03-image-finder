import axios from 'axios';
const instance = axios.creat({
  baseURL: 'https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389',
  params: {
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  },
});

export const getPosts = async (q, page = 1) => {
  const { data } = await instance('/', {
    params: { q, page },
  });
  return data;
};

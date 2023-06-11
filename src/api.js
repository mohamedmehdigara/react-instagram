import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
  return axios.get(`${API_BASE_URL}/posts`);
};

export const getPostById = (id) => {
  return axios.get(`${API_BASE_URL}/posts/${id}`);
};

export const createPost = (data) => {
  return axios.post(`${API_BASE_URL}/posts`, data);
};

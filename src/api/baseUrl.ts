import axios, { AxiosInstance } from 'axios';
import { API_KEY } from '@env';

// Create an Axios instance with a base URL
const baseURL = 'https://newsapi.org/v2';
const apiKey = API_KEY;

if (!apiKey) {
  throw new Error('API_KEY is missing in your environment variables.');
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apiKey,
  },
});

export default axiosInstance;

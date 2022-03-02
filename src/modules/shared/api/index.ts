import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const API_KEY = process.env.REACT_APP_API_KEY;

export default api;

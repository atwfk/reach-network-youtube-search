import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const API_KEY = "AIzaSyDvYkxaTMZKGvCdWgvaJUm9ahK2QbSizNw";

export default api;

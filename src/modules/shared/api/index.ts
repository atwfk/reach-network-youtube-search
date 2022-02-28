import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const API_KEY = "AIzaSyDvYkxaTMZKGvCdWgvaJUm9ahK2QbSizNw";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-backend-8v1b.onrender.com",
  withCredentials: true
});

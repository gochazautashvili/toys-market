import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Barer ${localStorage.getItem("user-token")}`,
  },
});

export default API;

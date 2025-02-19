import axios from "axios";

const API = axios.create({
  baseURL: "http://locahost:8000/api",
});

export default API;

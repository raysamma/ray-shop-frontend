import axios from "axios";

const API = axios.create({
  // 👇 UPDATED: Pointing to your live Render Backend
  baseURL: "http://localhost:8080/api",
});

delete API.defaults.headers.common["Authorization"];
export default API;
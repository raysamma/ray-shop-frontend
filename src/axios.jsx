import axios from "axios";

const API = axios.create({
  // 👇 UPDATED: Pointing to your live Render Backend
  baseURL: "https://ray-ecommerce.onrender.com/api",
});

delete API.defaults.headers.common["Authorization"];
export default API;
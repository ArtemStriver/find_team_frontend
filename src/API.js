import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000",
});

export default api;

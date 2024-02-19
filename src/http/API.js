import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000",
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originRequest = error.config;
    if (error.response.status === 401) {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/auth/refresh",
                {withCredentials: true})
            localStorage.setItem("token", "OK")
            return api.request(originRequest)
        } catch (e) {
            console.log(e)
        }
    }
    }
)

export default api;

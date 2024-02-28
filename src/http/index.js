import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
});

const authApi = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

authApi.interceptors.request.use(authInterceptor)

// TODO надо реализовать, но не горит.
authApi.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originRequest = error.config;
    if ((error.response.status === 401 || error.response.status === 403) && error.config && !error.config._isRetry)  {
        originRequest._isRetry = true
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/auth/refresh",
                {withCredentials: true})
            localStorage.setItem("token", response.data.access_token)
            return api.request(originRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
    }
)

export {
    authApi,
    api,
};

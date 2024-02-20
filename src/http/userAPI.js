import {api} from "./index";
import axios from "axios";

export const register = async (username, email, hashed_password, confirmed_password) => {
    return await api.post("/auth/register", {username, email, hashed_password, confirmed_password})
}

export const login = async (email, password) => {
    return await api.post("/auth/login", {email, password})
}

export const check = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8080/auth/refresh",
            {withCredentials: true})
        localStorage.setItem('token', response.data.access_token)
        return response.data.user
    } catch (e) {
        console.log(e);
    }
}

export const logout = async () => {
    return await api.get("/auth/logout")
}

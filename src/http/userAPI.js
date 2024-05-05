import {api, authApi} from "./index";
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
            "http://localhost:8000/auth/refresh",
            {withCredentials: true})
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('rstoken', response.data.refresh_token)
        return response.data.user
    } catch (e) {
        localStorage.removeItem("token");
        localStorage.removeItem("rstoken");
        await logout();
    }
}

export const logout = async () => {
    return await api.get("/auth/logout")
}

export const getProfileData = async (id) => {
    const {data} = await authApi.get("/profile/" + id)
    return data
}

export const changeProfile = async (
    username,
    vk,
    telegram,
    discord,
    other,
    description,
    lifestyle1,
    sport1,
    work1) => {
    const contacts = {"vk" : vk, "telegram" : telegram, "discord" : discord , "other" : other};
    const hobbies = {
        "lifestyle1" : lifestyle1, "lifestyle2" : null, "lifestyle3" : null,
        "sport1" : sport1, "sport2" : null, "sport3" : null,
        "work1" : work1, "work2" : null, "work3" : null,
    };
    return await authApi.patch("/profile/change",
        {
            "username": username,
            "image_path": "img/default_image.jpg",
            "contacts": contacts,
            "description": description,
            "hobbies": hobbies
        })
}

export const deleteProfile = async () => {
    return await authApi.delete("/profile/delete")
}

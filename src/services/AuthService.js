import api from "../http/API";

export default class AuthService {
    static async login(email, password) {
        return api.post("/auth/login", {email, password})
    }

    static async register(username, email, hashed_password, confirmed_password) {
        return api.post("/auth/register", {username, email, hashed_password, confirmed_password})
    }

    static async logout() {
        return api.post("/auth/logout")
    }
}

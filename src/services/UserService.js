import api from "../http/API";

export default class UserService {
    static fetchUsers() {
        return api.get("/profile/teams")
    }
}


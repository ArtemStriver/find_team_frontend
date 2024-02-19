import api from "../http/API";

export default class TeamService {
    static getTeams() {
        return api.get("/profile/teams")
    }
}


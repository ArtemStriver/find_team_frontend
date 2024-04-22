import {api, authApi} from "./index";


export const createTeam = async (
    title,
    type_team,
    number_of_members,
    contacts,
    description,
    tags,
    deadline_at) => {
    return await authApi.post("/team/create",
        {title,
        type_team,
        number_of_members,
        contacts,
        description,
        tags,
        deadline_at})
}

export const getTeams = async () => {
    const {data} = await api.get("/find/teams_list")
    return data
}

export const getOneTeams = async (id) => {
    return await authApi.get("/find/team/" + id)
}

export const getMyTeams = async () => {
    const {data} = await authApi.get("/profile/my_teams")
    return data
}

export const getTeamsMyParticipation  = async () => {
    const {data} = await authApi.get("/profile/teams_i_am_on")
    return data
}

export const getApplicationList = async (team_id) => {
    try {
        const {data} = await authApi.get("/team/applications_list?team_id=" + team_id)
        return data
    } catch (e) {
        return []
    }
}

export const getMembersList = async (team_id) => {
    try {
        const {data} = await authApi.get("/team/members_list?team_id=" + team_id)
        return data
    } catch (e) {
        return []
    }
}

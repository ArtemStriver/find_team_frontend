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
    const {data} = await authApi.get("/profile/teams")
    return data
}


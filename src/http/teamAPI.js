import {api, authApi} from "./index";


export const createTeam = async (
    title,
    type_team,
    number_of_members,
    description,
    deadline_at,
    team_city,
    tag1,
    tag2,
    tag3) => {
    const tags = {"tag1" : tag1, "tag2" : tag2, "tag3" : tag3 ,
        "tag4" : null , "tag5" : null , "tag6" : null , "tag7" : null};
    return await authApi.post("/team/create",
        {
            "title": title,
            "type_team": type_team,
            "number_of_members": number_of_members,
            "team_description": description,
            "team_deadline_at": deadline_at,
            "team_city": team_city,
            "tags" : tags,
        })
}

export const changeTeam = async (
    id,
    title,
    type_team,
    number_of_members,
    description,
    deadline_at,
    team_city,
    tag1,
    tag2,
    tag3) => {
    const tags = {"tag1" : tag1, "tag2" : tag2, "tag3" : tag3 ,
        "tag4" : null , "tag5" : null , "tag6" : null , "tag7" : null};
    return await authApi.patch("/team/change/" + id,
        {
            "title": title,
            "type_team": type_team,
            "number_of_members": number_of_members,
            "team_description": description,
            "team_deadline_at": deadline_at,
            "team_city": team_city,
            "tags" : tags,
        })
}

export const deleteTeam = async (id) => {
    return await authApi.delete("/team/delete/" + id)
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

import {authApi} from "./index";


export const joinInTeam = async (team_id, cover_letter) => {
    return await authApi.post("/find/join", {team_id, cover_letter});
}

export const quitFromTeam = async (team_id) => {
    return await authApi.post("/find/quit?team_id=" + team_id)
}

export const takeComrade = async (comrade_id, team_id) => {
    return await authApi.post("/team/take_comrade?comrade_id=" + comrade_id + "&team_id=" + team_id)
}

export const rejectComrade = async (comrade_id, team_id) => {
    return await authApi.post("/team/reject_comrade?comrade_id=" + comrade_id + "&team_id=" + team_id)
}

export const excludeComrade = async (comrade_id, team_id) => {
    return await authApi.post("/team/exclude_comrade?comrade_id=" + comrade_id + "&team_id=" + team_id)
}

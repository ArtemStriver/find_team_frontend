import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._teams = []
        this._my_teams = []
        this._my_teams_participation = []
        this._team_now = {}
        makeAutoObservable(this)
    }

    setTeams(teams) {
        this._teams = teams
    }

    setMyTeams(my_teams) {
        this._my_teams = my_teams
    }

    setMyTeamsParticipation(my_teams_participation) {
        this._my_teams_participation = my_teams_participation
    }

    setTeamNow(team_now) {
        this._team_now = team_now
    }

    get teams() {
        return this._teams
    }

    get myTeams() {
        return this._my_teams
    }

    get myTeamsParticipation() {
        return this._my_teams_participation
    }

    get team_now() {
        return this._team_now
    }
}
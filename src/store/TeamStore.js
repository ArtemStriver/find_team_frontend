import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._types = [
            {id: 1, name: "Работа"},
            {id: 2, name: "Лайфстайл"},
            {id: 3, name: "Спорт"},
        ]
        this._teams = []
        this._my_teams = []
        this._my_teams_participation = []
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
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

    get types() {
        return this._types
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

}
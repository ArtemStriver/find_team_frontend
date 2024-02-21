import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._types = [
            {id: 1, name: "Работа"},
            {id: 2, name: "Лайфстайл"},
            {id: 3, name: "Спорт"},
        ]
        this._teams = [
            {
                "id": "0e8b38f7-5b23-4f58-855f-e492d878882a",
                "title": "team",
                "number_of_members": 0,
                "tags": "string",
                "deadline_at": "2024-01-28T12:23:32.449000"
            },
            {
                "id": "a12e9fdc-bb19-4fdb-9d7f-26c948b4c686",
                "title": "string2",
                "number_of_members": 1,
                "tags": "string",
                "deadline_at": "2024-02-03T05:15:41.891000"
            },
            {
                "id": "54bb122b-8d93-4cef-a5c9-a8c6bc7632bd",
                "title": "team2",
                "number_of_members": 1,
                "tags": "string",
                "deadline_at": "2024-02-15T03:58:27.290000"
            }
        ]
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }

    setTeams(teams) {
        this._teams = teams
    }

    get types() {
        return this._types
    }

    get teams() {
        return this._teams
    }

}
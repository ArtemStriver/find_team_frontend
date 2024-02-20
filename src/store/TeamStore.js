import {makeAutoObservable} from "mobx";

export default class TeamStore {
    constructor() {
        this._types = [
            {id: 1, name: "Работа"},
            {id: 2, name: "Лайфстайл"},
            {id: 3, name: "Спорт"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    get types() {
        return this._types
    }

}
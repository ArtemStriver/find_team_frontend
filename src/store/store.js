import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user
    }

    async login(email, password){
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            // TODO мы же не передаем токены в ответе на логин, как они появляются в куках? А нужна ли вя логика ниже?
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async register(username, email, hashed_password, confirmed_password){
        try {
            const response = await AuthService.register(username, email, hashed_password, confirmed_password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout(){
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}
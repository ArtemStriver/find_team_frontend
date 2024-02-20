import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";

// Взаимодействие с mobx и хранение данных

// export default class Store {
//     // user = {};
//     isAuth = false;
//
//     constructor() {
//         makeAutoObservable(this);
//     }
//
//     setAuth(bool) {
//         this.isAuth = bool;
//     }
//
//     // setUser(user) {
//     //     this.user = user
//     // }
//
//     async login(email, password){
//         try {
//             const response = await AuthService.login(email, password);
//             localStorage.setItem("token", response.data.access_token); // нужен, чтобы добавлять его к каждому запросу, видимо мне не нужен вследствии логики на бекенде
//             this.setAuth(true); // информация что мы авторизованы
//             // this.setUser(response.data.user) // сохраняем данные пользователя - не нужно
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     async register(username, email, hashed_password, confirmed_password){
//         try {
//             const response = await AuthService.register(username, email, hashed_password, confirmed_password);
//             localStorage.setItem("token", response.data.access_token);
//             this.setAuth(true);
//             // this.setUser(response.data.user)
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     async logout(){
//         try {
//             await AuthService.logout();
//             localStorage.removeItem("token");
//             this.setAuth(false);
//             // this.setUser({})
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     async checkAuth(){
//         try {
//             const response = await axios.get(
//                 "http://127.0.0.1:8000/auth/refresh",
//                 {withCredentials: true})
//             console.log(response)
//             localStorage.setItem("token", response.data.access_token); // нужен, чтобы добавлять его к каждому запросу, видимо мне не нужен вследствии логики на бекенде
//             console.log(response)
//             this.setAuth(true); // информация что мы авторизованы
//             // this.setUser(response.data.user) // сохраняем данные пользователя - не нужно
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }
import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {logout} from "../http/userAPI";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";

const Header = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            alert("Вы вышли из аккаунта")
            await logout();
            localStorage.removeItem("token");
            user.setUser({})
            user.setIsAuth(false);
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <header>
            <div className="nav">
                <a href="/" className="logo">Findy</a>
                <ul className="nav-list">
                    <li><a href="/teams">Работа</a></li>
                    <li><a href="/teams">Лайфстайл</a></li>
                    <li><a href="/teams">Спорт</a></li>
                </ul>
                {!user.isAuth ?
                    // TODO переделать под кнопку, настроить стили
                    <button className="log-in-main-button" onClick={() => navigate(LOGIN_ROUTE)}>Вход</button>
                    :
                    <div>
                        <button
                            className="log-in-main-button"
                            onClick={() => navigate(PROFILE_ROUTE + "/" + user.user.id)}>Профиль
                        </button>
                        <button
                            className="log-out-main-button" onClick={() => logOut()}>Выход
                        </button>
                    </div>
                }
            </div>
            <div className="presentation"></div>
        </header>
    );
});
export default Header;
// export default observer(function Header() {
//     const {user} = useContext(Context)
//     return (
//         <header>
//             <div className="nav">
//                 <a href="/" className="logo">Findy</a>
//                 <ul className="nav-list">
//                     <li><a href="/teams">Работа</a></li>
//                     <li><a href="/teams">Лайфстайл</a></li>
//                     <li><a href="/teams">Спорт</a></li>
//                 </ul>
//                 {!user.isAuth ?
//                     <a href="/login" className="login-button">Вход</a>
//                     :
//                     <div>
//                         <a href="" className="login-button">Профиль</a>
//                         <a href="" className="login-button">Выйти</a>
//                     </div>
//                 }
//             </div>
//             <div className="presentation"></div>
//         </header>
//     )
// })

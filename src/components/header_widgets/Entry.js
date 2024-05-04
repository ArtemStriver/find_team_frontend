import React from 'react';
import "./header.css"
import {CREATE_TEAM_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {logout} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import img from "../../img/exit.png"

const Entry = (data) => {
    const user_data = data.data;
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            alert("Вы вышли из аккаунта")
            localStorage.removeItem("token");
            user_data.setUser({})
            user_data.setIsAuth(false);
            navigate(HOME_ROUTE)
            await logout();
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="entry">
            <div className="entry-actions">
                {!user_data.isAuth ?
                    // TODO переделать под кнопку, настроить стили
                    <div>
                        <button className="" onClick={() => navigate(LOGIN_ROUTE)}>Вход</button>
                    </div>
                    :
                    <div>
                        <a
                            href={PROFILE_ROUTE + "/" + user_data?.user?.id}
                            className="entry-actions-name">@{user_data?.user?.username}
                        </a>
                        <a className="entry-actions-exit" href="#" onClick={() => logOut()}> </a>
                    </div>
                }
            </div>
            <div className="entry-create_team">
                <a className="entry-create_team-link" href={CREATE_TEAM_ROUTE}>
                Создать файнд
                </a>
            </div>

        </div>
    );
};

export default observer(Entry);
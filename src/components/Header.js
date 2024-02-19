import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

export default observer(function Header() {
    const {store} = useContext(Context)
    return (
        <header>
            <div className="nav">
                <a href="/" className="logo">Findy</a>
                <ul className="nav-list">
                    <li><a href="/teams">Работа</a></li>
                    <li><a href="/teams">Лайфстайл</a></li>
                    <li><a href="/teams">Спорт</a></li>
                </ul>
                {!store.isAuth ?
                    <a href="/login" className="login-button">Вход</a>
                    :
                    <button onClick={() => store.logout()}>Выход</button>
                }
            </div>
            <div className="presentation"></div>
        </header>
    )
})

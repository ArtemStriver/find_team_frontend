import React from "react";

export default function Header() {
    return (
        <header>
            <div className="nav">
                <a href="/" className="logo">Findy</a>
                <ul className="nav-list">
                    <li><a href="/teams">Работа</a></li>
                    <li><a href="/teams">Лайфстайл</a></li>
                    <li><a href="/teams">Спорт</a></li>
                </ul>
                <a href="/auth" className="login-button">Вход</a>
            </div>
            <div className="presentation"></div>
        </header>
    )
}

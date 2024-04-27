import React from 'react';
import "./header.css"

const Nav = () => {
    return (
        <div className={"nav"}>
            <ul className="nav-list">
                <li className="nav-item"><a href="/teams" className="nav-link">Развитие</a></li>
                <li className="nav-item"><a href="/teams" className="nav-link">Лайфстайл</a></li>
                <li className="nav-item"><a href="/teams" className="nav-link">Спорт</a></li>
            </ul>
        </div>
    );
};

export default Nav;
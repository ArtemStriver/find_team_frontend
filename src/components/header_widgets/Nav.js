import React from 'react';
import "./header.css"

const Nav = () => {
    return (
        <div className={"nav"}>
            <ul className="nav-list">
                <li className="nav-item_r">
                    <a href="/teams/?type=work" className="nav-link">Развитие</a>
                </li>
                <li className="nav-item_l">
                    <a href="/teams/?type=lifestyle" className="nav-link">Лайфстайл</a>
                </li>
                <li className="nav-item_s">
                    <a href="/teams?type=sport" className="nav-link">Спорт</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
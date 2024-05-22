import React from 'react';
import "./header.css"
import Menu from "./BurgerMenu/Menu";
import {HOME_ROUTE} from "../../utils/consts";
import {logout} from "../../http/userAPI";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Burger = (data) => {
    const user_data = data.data;
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = React.useState(false);

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

    const main_items = user_data.isAuth ?
        [
            {value: "Профиль", href: "/profile/" + user_data?.user?.id, style: "btn-profile"},
            {value: "Создать команду", href: "/create", style: "btn-create"},
            {value: "Выход", href: "#", style: "btn-leave"},
        ]
        :
        [
            {value: "Вход", href: "/login"},
        ]
    const items = [
        {value: "Развитие", href: "/teams/?type=work", style: "style-work"},
        {value: "Лайфстайл", href: "/teams/?type=lifestyle", style: "style-lifestyle"},
        {value: "Спорт", href: "/teams?type=sport", style: "style-sport"},
    ]

    return (
        <div className="burger-container">
            <div className={isOpen ? "burger-btn-open" : "burger-btn"} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </div>
            <Menu open={isOpen}
                  setOpen={setIsOpen}
                  header="Меню"
                  items={items}
                  main_items={main_items}
                  logOut={logOut}/>
        </div>
    );
};

export default observer(Burger);
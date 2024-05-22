import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Logo from "./header_widgets/Logo";
import Nav from "./header_widgets/Nav";
import Entry from "./header_widgets/Entry";
import Burger from "./header_widgets/Burger";

const Header = observer(() => {
    const {user} = useContext(Context)

    return (
        <header>
            <Logo />
            <Nav />
            <Burger data={user}/>
            <Entry data={user}/>
        </header>
    );
});
export default Header;

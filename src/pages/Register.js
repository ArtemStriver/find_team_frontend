import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const RegisterForm: FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [hashed_password, setHashedPassword] = useState("");
    const [confirmed_password, setConfirmedPassword] = useState("");
    const {store} = useContext(Context);

    return (
        <>
            <div>
                <form className="login">
                    <h2>Войти в аккаунт</h2>
                    <input
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder="Username"/>
                    <input
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder="Email"/>
                    <input
                        id="hashed_password"
                        onChange={e => setHashedPassword(e.target.value)}
                        value={hashed_password}
                        autoComplete="on"
                        type="password"
                        placeholder="Password"/>
                    <input
                        id="confirmed_password"
                        onChange={e => setConfirmedPassword(e.target.value)}
                        value={confirmed_password}
                        autoComplete="on"
                        type="password"
                        placeholder="Confirme password"/>
                    <button type="button" onClick={() =>
                        store.register(username, email, hashed_password, confirmed_password)}>Регистрация</button>
                    <br/><br/>
                </form>
            </div>
        </>
    );
}

export default observer(RegisterForm);
import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store} = useContext(Context);

    return (
        <>
        <div>
            <form className="login">
                <h2>Войти в аккаунт</h2>
                <input
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Email"/>
                <input
                    id="passwoed"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    autoComplete="on"
                    type="password"
                    placeholder="Password"/>
                <button type="button" onClick={() => store.login(email, password)}>Логин</button>
                <button>Регистрация</button>
                <br/><br/>
            </form>
        </div>
        </>
    );
}

export default LoginForm;
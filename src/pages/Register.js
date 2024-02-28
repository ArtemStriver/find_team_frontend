import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {register} from "../http/userAPI";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";


const RegisterForm = observer(() => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [hashed_password, setHashedPassword] = useState("");
    const [confirmed_password, setConfirmedPassword] = useState("");
    const navigate = useNavigate()

    const signUp = async () => {
        try {
            await register(username, email, hashed_password, confirmed_password)
            alert("Вам на почту отправлено письмо с ссылкой, перейдите по ней для подтверждения аккаунта.")
            navigate(HOME_ROUTE)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <>
            <div className="form-page">
                <h2>Рагистрация</h2>
                <form className="some-form">
                    <input
                        className="some-input"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder="Username"/>
                    <input
                        className="some-input"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder="Email"/>
                    <input
                        className="some-input"
                        id="hashed_password"
                        onChange={e => setHashedPassword(e.target.value)}
                        value={hashed_password}
                        autoComplete="on"
                        type="password"
                        placeholder="Password"/>
                    <input
                        className="some-input"
                        id="confirmed_password"
                        onChange={e => setConfirmedPassword(e.target.value)}
                        value={confirmed_password}
                        autoComplete="on"
                        type="password"
                        placeholder="Confirme password"/>
                </form>
                <br/>
                <button className="login-button" type="button" onClick={signUp}>Регистрация</button>
                <br/>
                <a href="/login">Логин</a>
            </div>
        </>
    );
});

export default RegisterForm;
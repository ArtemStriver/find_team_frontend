import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {change_password} from "../../http/userAPI";
import {LOGIN_ROUTE} from "../../utils/consts";

const ChangePassword = () => {
    const [hashed_password, setHashedPassword] = useState("");
    const [confirmed_password, setConfirmedPassword] = useState("");
    const token = useParams().token
    const navigate = useNavigate()

    const changePassword = async () => {
        try {
            await change_password(token, hashed_password, confirmed_password)
            alert("Пароль был изменен.")
            navigate(LOGIN_ROUTE)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="login_form_page">
            <p className='register_form_title'>ИЗМЕНЕНИЕ ПАРОЛЯ</p>
            <form className="some-form">
                <input
                    className="some-input"
                    required="required"
                    id="hashed_password"
                    onChange={e => setHashedPassword(e.target.value)}
                    value={hashed_password}
                    autoComplete="on"
                    type="password"
                    maxLength={30}
                    placeholder="Введите новый пароль"/>
                <input
                    className="some-input"
                    required="required"
                    id="confirmed_password"
                    onChange={e => setConfirmedPassword(e.target.value)}
                    value={confirmed_password}
                    autoComplete="on"
                    type="password"
                    maxLength={30}
                    placeholder="Повторите новый пароль"/>
                <button type="button" className="login_form_button" onClick={changePassword}>Изменить пароль</button>
            </form>
        </div>
    );
};

export default ChangePassword;
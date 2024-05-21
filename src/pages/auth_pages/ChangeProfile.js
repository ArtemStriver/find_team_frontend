import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, PROFILE_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {changeProfile, deleteProfile, logout} from "../../http/userAPI";
import "./auth.css"
import {observer} from "mobx-react-lite";

const ChangeProfile = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const user_data =
        Object.keys(user.profile).length !== 0 ?
            [
                user?.profile?.username,
                user?.profile?.contacts?.vk,
                user?.profile?.contacts?.telegram,
                user?.profile?.contacts?.discord,
                user?.profile?.description,
                user?.profile?.hobbies?.lifestyle1,
                user?.profile?.hobbies?.sport1,
                user?.profile?.hobbies?.work1,
                user?.profile?.user_id
            ]
            :
            JSON.parse(localStorage.getItem('user_profile'));

    if (Object.keys(user.profile).length !== 0) {
        localStorage.setItem('user_profile', JSON.stringify(user_data));
    }

    const [username, setUsername] = useState(user_data[0]);
    const [vk, setVk] = useState(user_data[1]);
    const [telegram, setTelegram] = useState(user_data[2]);
    const [discord, setDiscord] = useState(user_data[3]);
    const [description, setDescription] = useState(user_data[4]);
    const [lifestyle1, setLifestyle1] = useState(user_data[5]);
    const [sport1, setSport1] = useState(user_data[6]);
    const [work1, setWork1] = useState(user_data[7]);

    const changeThisProfile = async () => {
        try {
            await changeProfile(username,
                                vk,
                                telegram,
                                discord,
                                null,
                                description,
                                lifestyle1,
                                sport1,
                                work1);
            navigate(PROFILE_ROUTE + "/" + user_data[8])
        } catch (e) {
            console.log(e)
        }
    }
    const deleteThisProfile = async () => {
        try {
            await deleteProfile();
            await logout();
            localStorage.removeItem("token");
            localStorage.setItem('user_profile', JSON.stringify([]));
            user.setUser({})
            user.setIsAuth(false);
            navigate(HOME_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }
    const checkChoice = async () => {
        const conf = window.confirm("Точно хотите удалить ваш аккаунт?");
        if (conf) {
            await deleteThisProfile()
        }
    }

    return (
        <div className="team_form_page">
            <p>ИЗМЕНИТЬ ПРОФИЛЬ</p>
            <form className="team_form">
                <input
                    className="team_form-input"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    maxLength="14"
                    placeholder="Username"/>
                <input
                    className="team_form-input"
                    id="vk"
                    value={vk}
                    onChange={e => setVk(e.target.value)}
                    type="text"
                    placeholder="Ссылка на vk"/>
                <input
                    className="team_form-input"
                    id="telegram"
                    value={telegram}
                    onChange={e => setTelegram(e.target.value)}
                    type="text"
                    placeholder="Ссылка на telegram"/>
                <input
                    className="team_form-input"
                    id="discord"
                    value={discord}
                    onChange={e => setDiscord(e.target.value)}
                    type="text"
                    placeholder="Ссылка на discord"/>
                <textarea
                    className="team_form-textarea"
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder="О себе"/>
                <input
                    className="team_form-input"
                    id="work1"
                    value={work1}
                    onChange={e => setWork1(e.target.value)}
                    type="text"
                    maxLength="26"
                    placeholder="Увлечение - Развитие"/>
                <input
                    className="team_form-input"
                    id="lifestyle1"
                    value={lifestyle1}
                    onChange={e => setLifestyle1(e.target.value)}
                    type="text"
                    maxLength="26"
                    placeholder="Увлечение - Лайфстайл"/>
                <input
                    className="team_form-input"
                    id="sport1"
                    value={sport1}
                    onChange={e => setSport1(e.target.value)}
                    type="text"
                    maxLength="26"
                    placeholder="Увлечение - Спорт"/>
                <button className="team_form-button" type="button" onClick={changeThisProfile}>Изменить профиль</button>
                <button
                    type="button"
                    className="leave_team-button_def"
                    onClick={() => checkChoice()}>
                    Удалить аккаунт
                </button>
            </form>
        </div>
    );
};

export default observer(ChangeProfile);
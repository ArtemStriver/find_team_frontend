import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, PROFILE_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {changeProfile, deleteProfile, logout} from "../../http/userAPI";

const ChangeProfile = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [username, setUsername] = useState(user?.profile.username);
    const [vk, setVk] = useState(user?.profile.contacts.vk);
    const [telegram, setTelegram] = useState(user?.profile.contacts.telegram);
    const [discord, setDiscord] = useState(user?.profile.contacts.discord);
    const [other, setOther] = useState(user?.profile.contacts.other);
    const [description, setDescription] = useState(user?.profile.description);
    const [lifestyle1, setLifestyle1] = useState(user?.profile.hobbies.lifestyle1);
    const [sport1, setSport1] = useState(user?.profile.hobbies.sport1);
    const [work1, setWork1] = useState(user?.profile.hobbies.work1);

    const changeThisProfile = async () => {
        try {
            await changeProfile(username,
                                vk,
                                telegram,
                                discord,
                                other,
                                description,
                                lifestyle1,
                                sport1,
                                work1);
            navigate(PROFILE_ROUTE + "/" + user.profile.user_id)
        } catch (e) {
            console.log(e)
        }
    }
    const deleteThisProfile = async () => {
        try {
            await deleteProfile();
            await logout();
            localStorage.removeItem("token");
            user.setUser({})
            user.setIsAuth(false);
            navigate(HOME_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="form-page">
            <h1>Изменить свой профиль</h1>
            <form className="some-form">
                <input
                    className="some-input"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    maxLength="14"
                    placeholder="Username"/>
                <input
                    className="some-input"
                    id="vk"
                    value={vk}
                    onChange={e => setVk(e.target.value)}
                    type="text"
                    placeholder="vk"/>
                <input
                    className="some-input"
                    id="telegram"
                    value={telegram}
                    onChange={e => setTelegram(e.target.value)}
                    type="text"
                    placeholder="telegram"/>
                <input
                    className="some-input"
                    id="discord"
                    value={discord}
                    onChange={e => setDiscord(e.target.value)}
                    type="text"
                    placeholder="discord"/>
                <input
                    className="some-input"
                    id="other"
                    value={other}
                    onChange={e => setOther(e.target.value)}
                    type="text"
                    placeholder="other"/>
                <textarea
                    className="some-input"
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder="Description"/>
                <input
                    className="some-input"
                    id="lifestyle1"
                    value={lifestyle1}
                    onChange={e => setLifestyle1(e.target.value)}
                    type="text"
                    placeholder="lifestyle1"/>
                <input
                    className="some-input"
                    id="sport1"
                    value={sport1}
                    onChange={e => setSport1(e.target.value)}
                    type="text"
                    placeholder="sport1"/>
                <input
                    className="some-input"
                    id="work1"
                    value={work1}
                    onChange={e => setWork1(e.target.value)}
                    type="text"
                    placeholder="work1"/>
                <br/><br/>
                <button className="login-button" type="button" onClick={changeThisProfile}>Изменить профиль</button>
                <br/><br/>
            </form>
            <button
                className="delete_team-button"
                onClick={() => deleteThisProfile()}>
                Удалить аккаунт
            </button>
        </div>
    );
};

export default ChangeProfile;
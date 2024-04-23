import React, {useContext} from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../index";

const ProfileData = (data) => {
    const {user} = useContext(Context)
    const user_data = data.data;
    const user_contacts = user_data.contacts;
    const navigate = useNavigate()

    return (
        <div>
            <div className="name">
                {user_data.user_id === user.user.id ?
                    <button
                        className="change_team-button"
                        onClick={() => navigate(PROFILE_ROUTE + "/change")}>
                        Отредактировать
                    </button>
                    :
                    <div></div>
                }
                {user_data.username}
            </div>
            <div className="contacts">
                {user_contacts?.email}
                {user_contacts?.telegram}
                {user_contacts?.vk}
                {user_contacts?.discord}
                {user_contacts?.other}
            </div>
            <div className="description">
                <p>
                    {user_data.description}
                </p>
            </div>
        </div>
    );
};

export default ProfileData;
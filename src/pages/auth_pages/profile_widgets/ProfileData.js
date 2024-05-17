import React, {useContext} from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../index";
import "../auth.css"

const ProfileData = (data) => {
    const {user} = useContext(Context)
    const user_data = data.data;
    const user_contacts = user_data.contacts;
    const navigate = useNavigate()

    return (
        <div className="profile_data">
            <div className="name_and_change">
                {user_data.user_id === user.user.id ?
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        href="#"
                        className="profile_change-button"
                        onClick={() => navigate(PROFILE_ROUTE + "/change")}>
                        Отредактировать
                    </a>
                    :
                    <div></div>
                }
                <div className="profile_username">{user_data.username}</div>
            </div>
            <div className="contacts">
                <div className="contact_item">
                    <div className="contact_item_icon_e"></div>
                    <div className="contact_item-text">{user_contacts?.email}</div>
                </div>
                <div className="contact_item">
                    <div className="contact_item_icon_t"></div>
                    <div className="contact_item-text">{user_contacts?.telegram}</div>
                </div>
                <div className="contact_item">
                    <div className="contact_item_icon_v"></div>
                    <div className="contact_item-text">{user_contacts?.vk}</div>
                </div>
                <div className="contact_item">
                    <div className="contact_item_icon_d"></div>
                    <div className="contact_item-text">{user_contacts?.discord}</div>
                </div>
            </div>
            <div className="profile_description">
                <p>О себе:</p>
                {user_data.description}
            </div>
        </div>
    );
};

export default ProfileData;
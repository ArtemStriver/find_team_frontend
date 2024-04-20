import React from 'react';

const ProfileData = (data) => {
    const user_data = data.data;
    const user_contacts = user_data.contacts;

    return (
        <div>
            <div className="name">
                <button>Отредактировать</button>
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
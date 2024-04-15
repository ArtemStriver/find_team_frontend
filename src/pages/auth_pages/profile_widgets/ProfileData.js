import React from 'react';

const ProfileData = (data) => {
    const user_data = data.data;

    return (
        <div>
            <div className="name">
                <button>Отредактировать</button>
                {user_data.username}
            </div>
            <div className="contacts">
                {/*TODO надо как-то отобразить список контактов*/}
                {/*{user_data.contacts.map(contact => <div>{contact}</div>)}*/}
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
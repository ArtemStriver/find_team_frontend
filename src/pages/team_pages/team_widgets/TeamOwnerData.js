import React from 'react';

const TeamOwnerData = (data) => {
    const team_data = data.data;

    return (
        <div className="team_owner_data">
            <div className="team_image"></div>
            {/*/!*TODO вместо owner_id выводить имя или почту владельца команды*!/*/}
            <div className="owner_name">{team_data.owner_name}</div>
            <div className="owner_contacts">{team_data.owner}</div>
        </div>
    );
};

export default TeamOwnerData;
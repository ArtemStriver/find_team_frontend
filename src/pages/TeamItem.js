import React from 'react';

const TeamItem = ({team}) => {
    return (
        <div className="team_item_card">
            <div>{team.title}</div>
            <div>{team.tags}</div>
            <div>#направление_команды</div>
        </div>
    );
};

export default TeamItem;
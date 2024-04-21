import React from 'react';

const TeamActions = (data) => {
    const user_data = data.u_data.user;
    const team_data = data.t_data;

    const members = [];
    for(const k in team_data.members) {
        const v = team_data.members[k];
        members.push(v.id);
    }

    return (
        <div>
            {/*{if (user_data.id === team_data.owner {*/}
            {/*    <div>*/}
            {/*        <button className="change_team-button">Редактировать команду</button>*/}
            {/*        <button className="delete_team-button">Удалить команду</button>*/}
            {/*    </div>*/}
            {/*} else if () {*/}
            {/*    <button className="leave_team-button">Покинуть команду</button>*/}
            {/*} else {*/}
            {/*    <button className="want_to_team-button">Хочу в команду</button>*/}
            {/*}}*/}

            {user_data?.id === team_data?.owner ?
                <div>
                    <button className="change_team-button">Редактировать команду</button>
                    <button className="delete_team-button">Удалить команду</button>
                </div>
                :
                members?.includes(user_data?.id) ?
                // {user._user ?
                    <button className="leave_team-button">Покинуть команду</button>
                    :
                    <button className="want_to_team-button">Хочу в команду</button>
            }
        </div>
    );
};

export default TeamActions;
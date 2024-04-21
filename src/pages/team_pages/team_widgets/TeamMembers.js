import React from 'react';

const TeamMembers = (data) => {
    const members_data = data.m_data;
    const team_data = data.t_data;
    const user_data = data.u_data.user;

    return (
        <div className="team_members">
            {members_data?.map(
                member => <div key={member.user_id}>
                    <p>{member.username} {member.user_id}</p>
                    {user_data.id === team_data.owner ?
                        <button>Исключить</button>
                        :
                        <div></div>
                    }
                </div>
            )}
        </div>
    );
};

export default TeamMembers;
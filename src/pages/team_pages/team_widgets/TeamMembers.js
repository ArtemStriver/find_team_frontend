import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";

const TeamMembers = (data) => {
    const members_data = data.m_data;
    const team_data = data.t_data;
    const user_data = data.u_data.user;

    return (
        <div className="team_members">
            {/*TODO Сделать имена членов команды ссылками*/}
            {members_data?.map(
                member => <div key={member.user_id}>
                    <a href={PROFILE_ROUTE + "/" + member.user_id}>{member.username}</a>
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
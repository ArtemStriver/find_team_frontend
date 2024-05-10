import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {excludeComrade} from "../../../http/teamActionAPI";
import "../team.css"

const TeamMembers = (data) => {
    const members_data = data.m_data;
    const team_data = data.t_data;
    const user_data = data.u_data.user;

    const excludeUserFromTeam = async (comrade_id, team_id) => {
        try {
            await excludeComrade(comrade_id, team_id);
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="team_members">
            <h4>Список участников</h4>
            {members_data?.map(
                member => <div key={member.user_id}>
                    <a href={PROFILE_ROUTE + "/" + member.user_id}>{member.username}</a>
                    {user_data.id === team_data.owner ?
                        <button
                            type="submit"
                            onClick={() => excludeUserFromTeam(member.user_id, member.team_id)}>
                            Исключить
                        </button>
                        :
                        <div></div>
                    }
                </div>
            )}
        </div>
    );
};

export default TeamMembers;
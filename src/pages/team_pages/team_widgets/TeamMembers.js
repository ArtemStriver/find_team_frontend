import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import {excludeComrade} from "../../../http/teamActionAPI";
import "../team.css"

const TeamMembers = (data) => {
    const members_data = data.m_data;
    const team_data = data.t_data;
    const user_data = data.u_data.user;
    const [active, setActive] = React.useState(false);

    const excludeUserFromTeam = async (comrade_id, team_id) => {
        try {
            await excludeComrade(comrade_id, team_id);
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    const checkChoice = async (member) => {
        const conf = window.confirm("Точно хотите исключить этого человека?");
        if (conf) {
            await excludeUserFromTeam(member.user_id, member.team_id)
        }
    }

    return (
        <div className="team_members">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={
                team_data?.type_team === 'work' ?
                    "team_members_preview_w"
                    :
                    team_data?.type_team === 'lifestyle' ?
                        "team_members_preview_l"
                        :
                        team_data?.type_team === 'sport' ?
                            "team_members_preview_s"
                            :
                            'team_members_preview'
            } href="#" onClick={() => setActive(!active)}>Список участников</a>
            <div className={
                active ?
                    "team_members_list_view"
                    :
                    "team_members_list_def"
            }>
                {members_data?.map(
                    member => <div key={member.user_id}>
                        <a className="team_members_link" href={PROFILE_ROUTE + "/" + member.user_id}>
                            {member.username}
                        </a>
                        {user_data.id === team_data.owner ?
                            <button
                                className="team_members_button"
                                type="submit"
                                onClick={() => checkChoice(member)}>
                                Исключить
                            </button>
                            :
                            <div></div>
                        }
                    </div>
                )}
            </div>

        </div>
    );
};

export default TeamMembers;
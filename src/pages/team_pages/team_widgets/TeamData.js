import React from 'react';
import "../team.css"

const TeamData = (data) => {
    const team_data = data.data;
    const team_tags = team_data.tags;

    return (
        <div className="team_info">
            <div className="team_title_and_type">
                <div className={
                    team_data?.type_team === 'work' ?
                        "team_type_w"
                        :
                        team_data?.type_team === 'lifestyle' ?
                            "team_type_l"
                            :
                            "team_type_s"
                }>{team_data.type_team?.toLocaleUpperCase()}</div>
                <div className="team_title">{team_data.title}</div>
            </div>
            <div className="team_description">
                <p>О файнде:</p>
                {team_data.team_description}
            </div>
            <div className={
                team_data?.type_team === 'work' ?
                    "team_deadline_w"
                    :
                    team_data?.type_team === 'lifestyle' ?
                        "team_deadline_l"
                        :
                        "team_deadline_s"
            }>{team_data.team_deadline_at}</div>
            <div className="team_tags">
                {team_tags?.tag1 !== '' ?
                    <div className="team_tag">#{team_tags?.tag1}</div>
                    :
                    <div></div>
                }
                {team_tags?.tag2 !== '' ?
                    <div className="team_tag">#{team_tags?.tag2}</div>
                    :
                    <div></div>
                }
                {team_tags?.tag3 !== '' ?
                    <div className="team_tag">#{team_tags?.tag3}</div>
                    :
                    <div></div>
                }
            </div>
        </div>
    );
};

export default TeamData;
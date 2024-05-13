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
                <p>Описание:</p>
                {team_data.team_description}
            </div>
            <div className="team_deadline">{team_data.team_deadline_at}</div>
            <div className="team_tags">
                {team_tags?.tag1}
                {team_tags?.tag2}
                {team_tags?.tag3}
                {team_tags?.tag4}
                {team_tags?.tag5}
                {team_tags?.tag6}
                {team_tags?.tag7}
            </div>
        </div>
    );
};

export default TeamData;
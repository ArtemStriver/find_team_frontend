import React from 'react';
import "../team.css"

const TeamNumberOfMembers = (data) => {
    const team_data = data.data;


    return (
        <div className="team_number_of_members">
            <p>Идут:</p>
            <div className="team_number_of_members_count">
                <div className={
                    team_data?.type_team === 'work' ?
                        "team_number_of_members_count_w"
                        :
                        team_data?.type_team === 'lifestyle' ?
                            "team_number_of_members_count_l"
                            :
                            team_data?.type_team === 'sport' ?
                                "team_number_of_members_count_s"
                                :
                                'team_number_of_members_count'
                }>
                    {team_data?.members?.length}/{team_data?.number_of_members}
                </div>
            </div>
        </div>
    );
};

export default TeamNumberOfMembers;
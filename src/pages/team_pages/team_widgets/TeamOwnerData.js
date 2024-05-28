import React from 'react';
import {PROFILE_ROUTE} from "../../../utils/consts";
import "../team.css"

const TeamOwnerData = (data) => {
    const team_data = data.data;

    return (
        <div className="team_owner_data">
            <div className={team_data?.type_team === 'work' ?
                        "team_owner_data_w"
                        :
                        team_data?.type_team === 'lifestyle' ?
                            "team_owner_data_l"
                            :
                            team_data?.type_team === 'sport' ?
                                "team_owner_data_s"
                                :
                                'team_owner_data_def'
                }>
                <div className={
                    team_data?.type_team === 'work' ?
                        "team_image_w"
                        :
                        team_data?.type_team === 'lifestyle' ?
                            "team_image_l"
                            :
                            team_data?.type_team === 'sport' ?
                                "team_image_s"
                                :
                                <div></div>
                }></div>
                <div className="owner_name">
                    <p className="owner_name-annotation">Создано:</p>
                    <a className="owner_name-link"
                       href={PROFILE_ROUTE + "/" + team_data.owner}>@{team_data.owner_name}</a>
                </div>
            </div>
        </div>
    );
};

export default TeamOwnerData;
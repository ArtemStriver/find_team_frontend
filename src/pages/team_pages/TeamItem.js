import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, TEAM_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import "./team.css"

const TeamItem = ({team}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className="team_item_card">
            <div className={
                team.type_team === 'work'?
                    "team_item_card_w"
                    :
                    team.type_team === 'lifestyle'?
                        "team_item_card_l"
                        :
                        "team_item_card_s"
            } onClick={() => {
                user.isAuth ?
                    navigate(TEAM_ROUTE + "/" + team.id)
                    :
                    navigate(LOGIN_ROUTE)
            }
            }>
                <div className="team_item-title">{team.title},</div>
                <div className="team_item-city">{team.team_city}</div>
                <div className="team_item-type">#{team.type_team}</div>
            </div>
        </div>

    );
};

export default TeamItem;
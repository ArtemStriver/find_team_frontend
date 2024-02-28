import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom"
import {getOneTeams} from "../http/teamAPI";

const TeamPage = () => {
    const {user} = useContext(Context)
    const [team_full_data, setTeamFullData] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        getOneTeams(id).then(data => setTeamFullData(data.data))
    }, []);

    return (
        <div className="team_page">
            <div className="team_owner_data">
                <div className="team_image"></div>
                {/*TODO вместо owner_id выводить имя или почту владельца команды*/}
                <div className="owner_name">{team_full_data.owner}</div>
                <div className="owner_contacts">{team_full_data.contacts}</div>
            </div>
            <div className="team_info">
                <div className="team_title">{team_full_data.title}</div>
                <div className="team_type">{team_full_data.type_team}</div>
                <div className="team_description">
                    <p>Описание:</p>
                    {team_full_data.description}
                </div>
                <div className="team_deadline">{team_full_data.deadline_at}</div>
                <button className="want_to_team-button">Хочу в команду</button>
            </div>
            <div className="team_members">
                <div className="team_members-title">Надо {team_full_data.number_of_members} участников</div>
                {/*TODO разобраться почему в _user не записывается инфа о ползователе, хотя он передается вместе с токенами*/}
                {user._user && user._user.id === team_full_data.owner ?
                    <div>
                        <div>
                            {team_full_data.members?.map(
                            member => <p key={member.id}>{member.username}</p>
                            )}
                        </div>
                        {/*TODO надо с сервера дергать за ручку и получать список заявок*/}
                        <div>
                            Application list
                        </div>
                    </div>
                    :
                    <div>
                        {team_full_data.members?.map(
                        member => <p key={member.id}>{member.username}</p>
                        )}
                    </div>
                }
            </div>
            {/*<div className="team_date_at_info">*/}
            {/*    /!*TODO is it need?*!/*/}
            {/*    <div>{team_full_data.created_at}</div>*/}
            {/*    <div>{team_full_data.updated_at}</div>*/}
            {/*</div>*/}
        </div>

    );
};

export default TeamPage;
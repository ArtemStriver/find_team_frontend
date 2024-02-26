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
    console.log(team_full_data)
    return (
        <div className="team_page">
            <div className="image+team_owner">
                <div className="team_image"></div>
                {/*TODO вместо owner_id выводить имя или почту владельца команды*/}
                <div>{team_full_data.owner}</div>
                <div>{team_full_data.contacts}</div>
                <br/><br/><br/><br/><br/>
            </div>
            <div className="title+type+description+join_in_button">
                <div>{team_full_data.title}</div>
                <div>{team_full_data.type_team}</div>
                <div>{team_full_data.deadline_at}</div>
                <div>{team_full_data.description}</div>
                <button>Хочу в команду</button>
                <br/><br/><br/><br/><br/>
            </div>
            <div className="count_of_members+members(can_view_profile(link))/if_is_ownet+to_application_list">
                <div>Надо {team_full_data.number_of_members} участников</div>
                {/*TODO разобраться почему в _user не записывается инфа о ползователе, хотя он передается вместе с токенами*/}
                {user._user && user._user.id === team_full_data.owner ?
                    <div>
                        <div>{team_full_data.members?.map(
                            member => <p key={member.id}>{member.username}</p>
                        )}</div>
                        {/*TODO надо с сервера дергать за ручку и получать список заявок*/}
                        <div>Application list</div>
                    </div>
                    :
                    <div>{team_full_data.members?.map(
                        member => <p key={member.id}>{member.username}</p>
                    )}</div>
                }
                <br/><br/><br/><br/><br/>
            </div>
            {/*<div className="info">*/}
            {/*    /!*TODO is it need?*!/*/}
            {/*    <div>{team_full_data.created_at}</div>*/}
            {/*    <div>{team_full_data.updated_at}</div>*/}
            {/*</div>*/}
        </div>

    );
};

export default TeamPage;
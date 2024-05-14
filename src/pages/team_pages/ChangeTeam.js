import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, TEAM_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {changeTeam, deleteTeam} from "../../http/teamAPI";
import "./team.css"

const ChangeTeam = () => {
    const {team} = useContext(Context)
    const navigate = useNavigate()

    const [title, setTitle] = useState(team?.team_now.title);
    const [type_team, setTypeTeam] = useState(team?.team_now.type_team);
    const [number_of_members, setNumberOfMembers] = useState(team?.team_now.number_of_members);
    const [description, setDescription] = useState(team?.team_now.team_description);
    const [deadline_at, setDeadline] = useState(team?.team_now.team_deadline_at);
    const [team_city, setTeamCity] = useState(team?.team_now.team_city);
    const [tag1, setTag1] = useState(team?.team_now.tags.tag1);
    const [tag2, setTag2] = useState(team?.team_now.tags.tag2);
    const [tag3, setTag3] = useState(team?.team_now.tags.tag3);

    const changeThisTeam = async () => {
        try {
            await changeTeam(
                team.team_now.id,
                title,
                type_team,
                number_of_members,
                description,
                deadline_at,
                team_city,
                tag1, tag2, tag3);
            navigate(TEAM_ROUTE + "/" + team.team_now.id)
        } catch (e) {
            console.log(e)
        }
    }
    const deleteThisTeam = async (id) => {
        try {
            await deleteTeam(id);
            navigate(HOME_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="form-page">
            <h1>Change Your Team</h1>
            <form className="some-form">
                <input
                    className="some-input"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"/>
                <select
                    // TODO кнопка меняет цвет при выборе типа команды
                    className="some-input"
                    id="typeTeam"
                    onChange={e => setTypeTeam(e.target.value)}
                    value={type_team}>
                    <option value="work">Работа</option>
                    <option value="lifestyle">Лайфстайл</option>
                    <option value="sport">Спорт</option>
                </select>
                <input
                    className="some-input"
                    id="number_of_members"
                    onChange={e => setNumberOfMembers(e.target.value)}
                    value={number_of_members}
                    type="number"
                    min="1" max="99"
                    placeholder="Number of members"/>
                <textarea
                    className="some-input"
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder="Description"/>
                <input
                    className="some-input"
                    id="deadline"
                    onChange={e => setDeadline(e.target.value)}
                    value={deadline_at}
                    type="date"
                    placeholder="Deadline"/>
                <input
                    className="some-input"
                    id="team_city"
                    onChange={e => setTeamCity(e.target.value)}
                    value={team_city}
                    type="text"
                    placeholder="City"/>
                <input
                    className="some-input"
                    id="tag1"
                    onChange={e => setTag1(e.target.value)}
                    value={tag1}
                    type="text"
                    placeholder="Tag1"/>
                <input
                    className="some-input"
                    id="tags"
                    onChange={e => setTag2(e.target.value)}
                    value={tag2}
                    type="text"
                    placeholder="Tag2"/>
                <input
                    className="some-input"
                    id="tags"
                    onChange={e => setTag3(e.target.value)}
                    value={tag3}
                    type="text"
                    placeholder="Tag3"/>
                <br/><br/>
                <button className="login-button" type="button" onClick={changeThisTeam}>Изменить команду</button>
                <br/><br/>
            </form>
            <button
                className="delete_team-button"
                onClick={() => deleteThisTeam(team.team_now.id)}>
                Удалить команду
            </button>
        </div>
    );
};

export default ChangeTeam;
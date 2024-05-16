import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE, TEAM_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {changeTeam, deleteTeam} from "../../http/teamAPI";
import "./team.css"

const ChangeTeam = () => {
    const {team} = useContext(Context)
    const navigate = useNavigate()

    const team_data =
        team.team_now.title !== undefined ?
            [
                team?.team_now.id,
                team?.team_now.title,
                team?.team_now.type_team,
                team?.team_now.number_of_members,
                team?.team_now.team_description,
                team?.team_now.team_deadline_at,
                team?.team_now.team_city,
                team?.team_now?.tags?.tag1,
                team?.team_now?.tags?.tag2,
                team?.team_now?.tags?.tag3
            ]
            :
            JSON.parse(localStorage.getItem('team_now'));
    if (team_data[0] !== undefined) {
        localStorage.setItem('team_now', JSON.stringify(team_data));
    }

    const [title, setTitle] = useState(team_data[1]);
    const [type_team, setTypeTeam] = useState(team_data[2]);
    const [number_of_members, setNumberOfMembers] = useState(team_data[3]);
    const [description, setDescription] = useState(team_data[4]);
    const [deadline_at, setDeadline] = useState(team_data[5]);
    const [team_city, setTeamCity] = useState(team_data[6]);
    const [tag1, setTag1] = useState(team_data[7]);
    const [tag2, setTag2] = useState(team_data[8]);
    const [tag3, setTag3] = useState(team_data[9]);

    const changeThisTeam = async () => {
        try {
            console.log(type_team)
            await changeTeam(
                team_data[0],
                title,
                type_team,
                number_of_members,
                description,
                deadline_at,
                team_city,
                tag1, tag2, tag3);
            navigate(TEAM_ROUTE + "/" + team_data[0])
        } catch (e) {
            console.log(e)
        }
    }
    const deleteThisTeam = async (id) => {
        try {
            await deleteTeam(id);
            localStorage.deleteItem('team_now');
            // TODO почему не работает???
            navigate(HOME_ROUTE);
        } catch (e) {
            console.log(e)
        }
    }

    const checkChoice = async () => {
        const conf = window.confirm("Точно хотите удалить команду?");
        if (conf) {
            await deleteThisTeam(team_data[0]);
        }
    }

    return (
        <div className="team_form_page">
            <p>ИЗМЕНИТЬ ДАННЫЕ КОМАНДЫ</p>
            <form className="team_form">
                <div className={
                    type_team === 'work' ?
                        "team_form_w"
                        :
                        type_team === 'lifestyle' ?
                            "team_form_l"
                            :
                            type_team === 'sport' ?
                                "team_form_s"
                                :
                                'team_form_def'
                }>
                    <input
                        className="team_form-input"
                        id="title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Название команды"
                        maxLength={50}/>
                    <div className="team_form-select_and_number">
                        <select
                            className={
                                type_team === 'work' ?
                                    "team_form-select_w"
                                    :
                                    type_team === 'lifestyle' ?
                                        "team_form-select_l"
                                        :
                                        type_team === 'sport' ?
                                            "team_form-select_s"
                                            :
                                            "team_form-select"
                            }
                            id="typeTeam"
                            onChange={e => setTypeTeam(e.target.value)}
                            value={type_team}>
                            <option className="team_form-select-op" value=""></option>
                            <option className="team_form-select-op" value="lifestyle">Лайфстайл</option>
                            <option className="team_form-select-op" value="work">Работа</option>
                            <option className="team_form-select-op" value="sport">Спорт</option>
                        </select>
                        <input
                            className="team_form-input_numb"
                            id="number_of_members"
                            onChange={e => setNumberOfMembers(e.target.value)}
                            value={number_of_members}
                            type="number"
                            min="1" max="99"
                            placeholder="Количество участников"/>
                    </div>
                    <textarea
                        className="team_form-textarea"
                        id="description"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        maxLength={300}
                        placeholder="Описание команды"/>
                    <input
                        className="team_form-input"
                        id="deadline"
                        onChange={e => setDeadline(e.target.value)}
                        value={deadline_at}
                        type="date"
                        placeholder="Срок сбора команды"/>
                    <input
                        className="team_form-input"
                        id="team_city"
                        onChange={e => setTeamCity(e.target.value)}
                        value={team_city}
                        type="text"
                        maxLength={30}
                        placeholder="Место сбора"/>
                    <div className="team_form-input_tags">
                        <input
                            className="team_form-input"
                            id="tags"
                            onChange={e => setTag1(e.target.value)}
                            value={tag1}
                            type="text"
                            maxLength={12}
                            placeholder="Тег 1"/>
                        <input
                            className="team_form-input"
                            id="tags"
                            onChange={e => setTag2(e.target.value)}
                            value={tag2}
                            type="text"
                            maxLength={12}
                            placeholder="Тег 2"/>
                        <input
                            className="team_form-input"
                            id="tags"
                            onChange={e => setTag3(e.target.value)}
                            value={tag3}
                            type="text"
                            maxLength={12}
                            placeholder="Тег 3"/>
                    </div>
                    <button
                        className="team_form-button"
                        type="button"
                        onClick={changeThisTeam}>
                        Изменить команду
                    </button>
                    <button
                        className="leave_team-button_def"
                        onClick={() => checkChoice()}>
                        Удалить команду
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangeTeam;
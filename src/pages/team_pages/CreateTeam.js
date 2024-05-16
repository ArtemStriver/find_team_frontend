import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";
import {createTeam} from "../../http/teamAPI";
import "./team.css"

const CreateTeam = () => {
    const [title, setTitle] = useState("");
    const [type_team, setTypeTeam] = useState("lifestyle");
    const [number_of_members, setNumberOfMembers] = useState(1);
    const [description, setDescription] = useState("");
    const [deadline_at, setDeadline] = useState("");
    const [team_city, setTeamCity] = useState("Интернет");
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [tag3, setTag3] = useState("");

    const navigate = useNavigate()

    const addTeam = async () => {
        try {
            // const response = await create_team
            await createTeam(
                title,
                type_team,
                number_of_members,
                description,
                deadline_at,
                team_city,
                tag1, tag2, tag3);
            navigate(HOME_ROUTE)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="team_form_page">
            <p>СОЗДАЙ СВОЙ ФАЙНД</p>
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
                                            '"team_form-select"'
                            }
                            id="typeTeam"
                            onChange={e => setTypeTeam(e.target.value)}
                            value={type_team}>
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
                    <button className="team_form-button" type="button" onClick={addTeam}>Создать команду</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTeam;
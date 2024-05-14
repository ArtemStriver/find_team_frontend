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
        <div className="form-page">
            <h1>Create Your Team</h1>
            <form className="some-form">
                <input
                    className="some-input"
                    id="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                    maxLength={50}/>
                <select
                    // TODO кнопка меняет цвет при выборе типа команды
                    className="some-input"
                    id="typeTeam"
                    onChange={e => setTypeTeam(e.target.value)}
                    value={type_team}>
                    <option value="lifestyle">Лайфстайл</option>
                    <option value="work">Работа</option>
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
                <button className="login-button" type="button" onClick={addTeam}>Создать команду</button>
                <br/><br/>
            </form>
        </div>
    );
};

export default CreateTeam;
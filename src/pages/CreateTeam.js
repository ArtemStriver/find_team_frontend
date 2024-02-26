import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";
import {register} from "../http/userAPI";
import {createTeam} from "../http/teamAPI";

const CreateTeam = () => {
    const [title, setTitle] = useState("");
    const [typeTeam, setTypeTeam] = useState("");
    const [contacts, setContacts] = useState("");
    const [number_of_members, setNumberOfMembers] = useState(1);
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [tags, setTags] = useState("");
    // const [imagePath, setImagePath] = useState("");

    const navigate = useNavigate()

    const addTeam = async () => {
        try {
            // const response = await create_team
            await createTeam(title, typeTeam, number_of_members, contacts, description, tags, deadline)
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
                    placeholder="Title"/>
                <select
                    className="some-input"
                    id="typeTeam"
                    onChange={e => setTypeTeam(e.target.value)}
                    value={typeTeam}>
                    <option value="work">Работа</option>
                    <option value="lifestyle">Лайфстайл</option>
                    <option value="sport">Спорт</option>
                </select>
                <input
                    className="some-input"
                    id="contacts"
                    onChange={e => setContacts(e.target.value)}
                    value={contacts}
                    type="text"
                    placeholder="Your cintacts"/>
                <input
                    className="some-input"
                    id="number_of_members"
                    onChange={e => setNumberOfMembers(e.target.value)}
                    value={number_of_members}
                    type="number"
                    min="1" max="123"
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
                    value={deadline}
                    type="datetime-local"
                    placeholder="Deadline"/>
                <input
                    className="some-input"
                    id="tags"
                    onChange={e => setTags(e.target.value)}
                    value={tags}
                    type="text"
                    placeholder="Tags separated by spaces"/>
                {/*<input*/}
                {/*    id="image"*/}
                {/*    onChange={e => setImagePath(e.target.value)}*/}
                {/*    value={imagePath}*/}
                {/*    type="file"*/}
                {/*    placeholder="Team image"/><br/><br/>*/}
                <br/><br/>
                <button className="login-button" type="button" onClick={addTeam}>Создать команду</button>
                <br/><br/>
            </form>
        </div>
    );
};

export default CreateTeam;
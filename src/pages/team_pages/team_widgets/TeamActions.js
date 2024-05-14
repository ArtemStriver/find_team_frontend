import React from 'react';
import {joinInTeam, quitFromTeam} from "../../../http/teamActionAPI";
import Modal from "./team_modal/Modal";
import {TEAM_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";
import "../team.css"

const TeamActions = (data) => {
    const user_data = data.u_data.user;
    const team_data = data.t_data;
    const [active, setActiveModal] = React.useState(false);
    const [coverLetter, setCoverLetter] = React.useState();
    const navigate = useNavigate()

    const members = [];
    for(const k in team_data.members) {
        const v = team_data.members[k];
        members.push(v.id);
    }

    const joinInTheTeam = async (team_id, cover_letter) => {
        try {
            await joinInTeam(team_id, cover_letter);
            setCoverLetter(false)
            window.location.reload()
        } catch (e) {
            alert("Вы уже отправили запрос в эту команду.")
        }
    }
    const quitFromTheTeam = async (team_id) => {
        try {
            await quitFromTeam(team_id);
            window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            {user_data?.id === team_data?.owner ?
                <div className="team_action_buttons">
                    <button
                        className="change_team-button"
                        onClick={() => navigate(TEAM_ROUTE + "/change/" + team_data.id)}>
                        Редактировать команду
                    </button>
                </div>
                :
                members?.includes(user_data?.id) ?
                    <div className="leave_team-button">
                        <button
                            className="leave_team-button_def"
                            type="submit"
                            onClick={() => quitFromTheTeam(team_data.id)}>
                            Покинуть команду
                        </button>
                    </div>
                    :
                    <div>
                        <div className="want_to_team-button">
                            <button
                                className={
                                    team_data?.type_team === 'work' ?
                                        "want_to_team-button_w"
                                        :
                                        team_data?.type_team === 'lifestyle' ?
                                            "want_to_team-button_l"
                                            :
                                            team_data?.type_team === 'sport' ?
                                                "want_to_team-button_s"
                                                :
                                                'want_to_team-button_def'
                                }
                                onClick={() => setActiveModal(true)}>
                                Хочу в команду
                            </button>
                        </div>
                        <Modal active={active} setActive={setActiveModal}>
                            <p className="">
                                Для подачи заявки на вступление отправьте небольшое сопроводительное письмо.
                            </p>
                            <input
                                className=""
                                onChange={e => setCoverLetter(e.target.value)}
                                value={coverLetter}
                                autoComplete="on"
                                placeholder="Текст письма"/>
                            <button className="" type="button"
                                    onClick={() => joinInTheTeam(team_data.id, coverLetter)}>Отправить заявку
                            </button>
                        </Modal>
                    </div>
            }
        </div>
    );
};

export default TeamActions;
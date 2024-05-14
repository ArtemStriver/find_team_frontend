import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import TeamList from "./TeamList";
import {Context} from "../../index";
import {useSearchParams} from "react-router-dom";
import "./team.css"


const Teams = observer(() => {
    const {team} = useContext(Context)
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("create");
    const [searchParams] = useSearchParams();

    const sorted_teams = team.teams.slice().sort((a, b) => {
        if (sortBy === "deadline") {
            if (a.team_deadline_at > b.team_deadline_at) {
                return -1
            } else {
                return 1
            }
        } else {
            return 1
        }
    })

    const filtered_sorted_teams = sorted_teams.filter(team => {
        return team.title.toLowerCase().includes(search.toLowerCase())
    })

    const filtered_sorted_teams_by_type = filtered_sorted_teams.filter(team => {
        return team.type_team === searchParams.get("type")
    })

    return (
        <div className="teams_page">
            <div className="teams_info_bar">
                <div className="type_team_title">
                    {searchParams.get("type") === null ?
                        <p>Findy.ВсеКоманды</p>
                        :
                        searchParams.get("type") === "work" ?
                            <p className="type_team_title_w">Findy.Развитие</p>
                            :
                            searchParams.get("type") === "lifestyle" ?
                                <p className="type_team_title_l">Findy.Лайфстайл</p>
                                :
                                <p className="type_team_title_s">Findy.Спорт</p>
                    }
                </div>
                <div className="search_and_filters">
                    <form className="search_teams">
                        <input
                            className="search_teams_input"
                            id="search_team"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            type="text"
                            placeholder="Поиск..."/>
                    </form>
                    <div className="teams_filter">
                        <ul className="teams_filter_list">
                            <li className="teams_filter_item">
                                <a className="teams_filter_link" href="#" onClick={() => setSortBy("deadline")}>
                                    По дате дедлайна
                                </a>
                            </li>
                            <li className="teams_filter_item">
                                <a className="teams_filter_link" href="#" onClick={() => setSortBy("create")}>
                                    По дате создания
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TeamList data={
                searchParams.get("type") === null ?
                    filtered_sorted_teams
                    :
                    filtered_sorted_teams_by_type
            }/>
        </div>
    );
});

export default Teams;
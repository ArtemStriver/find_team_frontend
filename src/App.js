import React, {useContext, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import {observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {getMyTeams, getTeams, getTeamsMyParticipation} from "./http/teamAPI";


const App = observer(() => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            check().then(data => {
                user.setIsAuth(true);
                user.setUser(data);
            })
        }
    }, [])

    useEffect(() => {
        getTeams().then(data => team.setTeams(data))
    }, [])

    useEffect(() => {
        getMyTeams().then(data => team.setMyTeams(data))
    }, [])

    useEffect(() => {
        getTeamsMyParticipation().then(data => team.setMyTeamsParticipation(data))
    }, [])


    return (
        <div className="wrapper">
            <Router>
                <Header/>
                <AppRouter/>
                <Footer/>
            </Router>
        </div>
    );
});

export default App;

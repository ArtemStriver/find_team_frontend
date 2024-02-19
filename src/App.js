import React, {FC, useContext, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Teams from "./pages/Teams";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import TeamService from "./services/TeamService";


const App: FC = () => {
    const {store} = useContext(Context);
    const [teams, setTeams] = []
    useEffect(() => {
        if(localStorage.getItem("token")){
            store.checkAuth()
        }
    }, [])

    async function getTeams() {
        try {
            const response = await TeamService.getTeams();
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    // if (!store.isAuth) {
    //     return (
    //         <LoginForm />
    //     )
    // }

    return (
        <div className="wrapper">
            <Router>
                <Header/>
                <h1>{store.isAuth ? "Пользователь авторизован." : "Авторизуйтесь!"}</h1>

                <button onClick={getTeams}>Вывести список команд</button>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    {/*TODO поправить нейминг*/}
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/teams" element={<Teams/>}/>
                </Routes>

                <Footer/>
            </Router>
        </div>
    );
}

export default observer(App);

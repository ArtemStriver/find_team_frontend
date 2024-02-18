import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Teams from "./pages/Teams";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    "id": "0e8b38f7-5b23-4f58-855f-e492d878882a",
                    "title": "team",
                    "number_of_members": 0,
                    "tags": "string",
                    "deadline_at": "2024-01-28T12:23:32.449000"
                },
                {
                    "id": "a12e9fdc-bb19-4fdb-9d7f-26c948b4c686",
                    "title": "string2",
                    "number_of_members": 1,
                    "tags": "string",
                    "deadline_at": "2024-02-03T05:15:41.891000"
                },
                {
                    "id": "54bb122b-8d93-4cef-a5c9-a8c6bc7632bd",
                    "title": "team2",
                    "number_of_members": 1,
                    "tags": "string",
                    "deadline_at": "2024-02-15T03:58:27.290000"
                }
            ]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/teams" element={<Teams />} />
                    </Routes>

                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;

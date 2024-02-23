import {CREATE_TEAM_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEAM_ROUTE, TEAMS_ROUTE} from "./utils/consts";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeamPage from "./pages/TeamPage";
import CreateTeam from "./pages/CreateTeam";

export const authRoutes = [
    {
        path: TEAM_ROUTE + "/:id",
        Component: TeamPage
    },
    {
        path: CREATE_TEAM_ROUTE,
        Component: CreateTeam
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: TEAMS_ROUTE,
        Component: Teams
    },
]
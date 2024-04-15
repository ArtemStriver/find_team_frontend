import {
    CREATE_TEAM_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ROUTE,
    TEAM_ROUTE,
    TEAMS_ROUTE
} from "./utils/consts";
import Teams from "./pages/team_pages/Teams";
import Home from "./pages/main_pages/Home";
import Login from "./pages/auth_pages/Login";
import Register from "./pages/auth_pages/Register";
import TeamPage from "./pages/team_pages/TeamPage";
import CreateTeam from "./pages/team_pages/CreateTeam";
import Profile from "./pages/auth_pages/Profile"

export const authRoutes = [
    {
        path: TEAM_ROUTE + "/:id",
        Component: TeamPage
    },
    {
        path: CREATE_TEAM_ROUTE,
        Component: CreateTeam
    },
    {
        path: PROFILE_ROUTE + "/:id",
        Component: Profile
    },
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
import {HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, TEAM_ROUTE, TEAMS_ROUTE} from "./utils/consts";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const authRoutes = [
    // TODO перенести в публичные роутеры
    {
        path: TEAMS_ROUTE,
        Component: Teams
    },
    {
        path: TEAM_ROUTE + "/:id",
        Component: Teams
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
]
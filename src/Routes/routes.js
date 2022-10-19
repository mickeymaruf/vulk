import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import PlanDetails from "../components/PlanDetails";
import Pricing from "../components/Pricing";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Resources from "../components/Resources";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";
import RestrictLoginUser from "./RestrictLoginUser";
import RestrictUnverifiedUser from "./RestrictUnverifiedUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'pricing', element: <Pricing /> },
            { path: 'pricing/:id', loader: ({ params }) => params.id, element: <PrivateRoute><PlanDetails /></PrivateRoute> },
            { path: 'resources', element: <PrivateRoute><RestrictUnverifiedUser><Resources /></RestrictUnverifiedUser></PrivateRoute> },
            // firebase
            { path: 'login', element: <RestrictLoginUser><Login /></RestrictLoginUser> },
            { path: 'register', element: <RestrictLoginUser><Register /></RestrictLoginUser> },
            { path: 'profile', element: <PrivateRoute><Profile /></PrivateRoute> },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
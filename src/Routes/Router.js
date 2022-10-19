import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import PlanDetails from "../components/PlanDetails";
import Pricing from "../components/Pricing";
import Register from "../components/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";
import RestrictLoginUser from "./RestrictLoginUser";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'pricing', element: <Pricing /> },
            { path: 'pricing/:id', loader: ({ params }) => params.id, element: <PrivateRoute><PlanDetails /></PrivateRoute> },
            // firebase
            { path: 'login', element: <RestrictLoginUser><Login /></RestrictLoginUser> },
            { path: 'register', element: <RestrictLoginUser><Register /></RestrictLoginUser> },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
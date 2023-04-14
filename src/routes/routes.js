import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Teams from "../pages/teams/Teams";
import About from "../pages/about/About";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/teams",
                element: <Teams></Teams>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])
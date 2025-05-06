import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import OwnerPage from "../pages/Owner/OwnerPage";
import Layout from "../layout/Layout";
import Teams from "../pages/Teams/Teams";


// Add funtionality of Layout Outlet from router dom

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path:"/",
                    element: <Homepage/>
                },
                {
                    path:"/owner",
                    element: <OwnerPage/>
                },
                {
                    path:"/teams",
                    element: <Teams />
                }
            ]
        }
    ]
);
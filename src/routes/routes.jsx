import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import Navbar from "../components/Navbar/Navbar";
import OwnerPage from "../pages/Owner/OwnerPage";


// Add funtionality of Layout Outlet from router dom

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <div>
                    <Homepage />
                </div>
            )
        },
        {
            path: "/owner",
            element: (
                <div>
                    <OwnerPage/>
                </div>
            )
        }
    ]
);
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import OwnerPage from "../pages/Owner/OwnerPage";
import Layout from "../layout/Layout";
import Teams from "../pages/Teams/Teams";
import { useWeb3State } from "../context/useWeb3Context";
import { toast } from "react-toastify";
import ProtectedRoute from "../components/ProtectRoute/ProtectedRoute";





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
                    element: (
                        <ProtectedRoute>
                            <OwnerPage/>
                        </ProtectedRoute>
                    )
                },
                {
                    path:"/teams",
                    element: (
                        <ProtectedRoute>
                            <Teams />
                        </ProtectedRoute>
                    )
                }
            ]
        }
    ]
);
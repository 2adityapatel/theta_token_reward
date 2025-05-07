import { createBrowserRouter, useNavigate } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import OwnerPage from "../pages/Owner/OwnerPage";
import Layout from "../layout/Layout";
import Teams from "../pages/Teams/Teams";
import { useWeb3State } from "../context/useWeb3Context";
import { toast } from "react-toastify";
import ProtectedRoute from "../components/ProtectRoute/ProtectedRoute";


// Add funtionality of Layout Outlet from router dom


const checkWalletConnection = () => {

    const navigate = useNavigate();

    const  web3State  = useWeb3State()
    console.log(web3State);
    
console.log(isWalletConnected);

    if(isWalletConnected == null){
        toast.info("Connect your wallet first !! - - - - -- ")
        navigate('/');
    }


    return true;

}

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
                    element: (() => checkWalletConnection() )&& <OwnerPage/>
                },
                {
                    path:"/teams",
                    element: (() => checkWalletConnection() )&& <Teams/>
                }
            ]
        }
    ]
);
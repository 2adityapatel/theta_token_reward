import { toast } from 'react-toastify';
import { useWeb3State } from '../../context/useWeb3Context'
import { nav } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({children}) => {

    const walletStatus = localStorage.getItem("isWalletConnected")
    const navigate = useNavigate()
    const { isWalletConnected } = useWeb3State()
   

    useEffect(()=>{

        if(!walletStatus){
            toast.info("Connect your wallet first !")
            navigate("/")
        }    

    }, [isWalletConnected, navigate])

    
    if(walletStatus){
        return children;
    }

   

}

export default ProtectedRoute
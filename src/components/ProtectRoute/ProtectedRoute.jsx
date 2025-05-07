import { toast } from 'react-toastify';
import { useWeb3State } from '../../context/useWeb3Context'
import { nav } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({children}) => {

    const {isWalletConnected, } = useWeb3State();
    const navigate = useNavigate()

    console.log("is connected");
    console.log(isWalletConnected);
    
    

    useEffect(()=>{

        if(!isWalletConnected){
            toast.info("Connect your wallet first !! Before home")
            navigate("/")
        }    

    }, [isWalletConnected])

    
    if(isWalletConnected){
        return children;
    }


}

export default ProtectedRoute